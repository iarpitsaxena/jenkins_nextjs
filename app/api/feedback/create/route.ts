import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        const { title, description, boardId } = body;

        // Validate required fields
        if (!title || !description || !boardId) {
            return new NextResponse(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        // Create feedback
        const feedback = await db.feedback.create({
            data: {
                title,
                description,
                boardId,
                votes: 0
            }
        });

        return new NextResponse(JSON.stringify(feedback), { status: 201 });
    } catch (error) {
        console.error("Error creating feedback:", error);
        return new NextResponse(JSON.stringify({ error: "Failed to create feedback" }), { status: 500 });
    }
}
