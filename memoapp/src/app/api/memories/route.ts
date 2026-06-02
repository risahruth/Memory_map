import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const cookieStore = await cookies();

        const token = cookieStore.get("token")?.value;

        if (!token) {
            return NextResponse.json(
                {
                    message: "Unauthorized",
                },
                {
                    status: 401,
                }
            );
        }

        const decoded = verifyToken(token);

        if (!decoded) {
            return NextResponse.json(
                {
                    message: "Invalid token",
                },
                {
                    status: 401,
                }
            );
        }

        const memories = await prisma.memory.findMany({
            where: {
                userId: decoded.userId,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(memories);
    } catch {
        return NextResponse.json(
            {
                message: "Internal server error",
            },
            {
                status: 500,
            }
        );
    }
}

export async function POST(
    req: NextRequest
) {

    try {

        const body = await req.json();
        const {
                title,
                description,
                locationName,
                visibility,
                imageUrl,
            } = body;

        console.log(body);
        if (
            !title ||
            !description
        ) {
            return NextResponse.json(
                {
                    message:
                        "Title and description are required",
                },
                {
                    status: 400,
                }
            );
        }
        const cookieStore =await cookies();

        const token =cookieStore.get("token")?.value;
        if (!token) {
            return NextResponse.json(
                {
                    message:
                        "Unauthorized",
                },
                {
                    status: 401,
                }
            );
        }
        const decoded =verifyToken(token);
        if (!decoded) {
            return NextResponse.json(
                {
                    message: "Invalid token",
                },
                {
                    status: 401,
                }
            );
        }
        const memory = await prisma.memory.create({
                data: {
                    title,
                    description,
                    locationName,
                    visibility,
                    imageUrl,
                    userId: decoded.userId,
                },
            });

        return NextResponse.json(
        {
            message: "Memory created successfully ",
            memory,
        },
        {
            status: 201,
        }
    );

    } catch {

        return NextResponse.json(
            {
                message:
                    "Internal server error",
            },
            {
                status: 500,
            }
        );
    }
}