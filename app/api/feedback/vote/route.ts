import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        const { id, value } = body;

        const feedback = await db.feedback.update({
            where: { id },
            data: {
                votes: {
                    increment: value // value will be 1 or -1
                }
            }
        });

        return new NextResponse(JSON.stringify(feedback), { status: 200 });
    } catch (error) {
        console.error("Error updating vote:", error);
        return new NextResponse(JSON.stringify({ error: "Failed to update vote" }), { status: 500 });
    }
}
