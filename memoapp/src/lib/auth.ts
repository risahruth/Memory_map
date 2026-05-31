import jwt from "jsonwebtoken";

export type AuthTokenPayload = {
    userId: string;
};

export function generateToken(userId: string): string {
    return jwt.sign(
        { userId },
        process.env.JWT_SECRET!,
        {
            expiresIn: "7d",
        }
    );
}

export function verifyToken(token: string): AuthTokenPayload | null {
    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET!
        );

        if (
            typeof decoded === "object" &&
            decoded !== null &&
            typeof decoded.userId === "string"
        ) {
            return {
                userId: decoded.userId,
            };
        }

        return null;
    } catch {
        return null;
    }
}
