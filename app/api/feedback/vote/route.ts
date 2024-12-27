import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        const { id, value } = body;

        // First get the current feedback to check votes
        const currentFeedback = await db.feedback.findUnique({
            where: { id }
        });

        if (!currentFeedback) {
            return new NextResponse(JSON.stringify({ error: "Feedback not found" }), { status: 404 });
        }

        // Prevent negative votes
        if (currentFeedback.votes + value < 0) {
            return new NextResponse(JSON.stringify({ error: "Votes cannot be negative" }), { status: 400 });
        }

        const feedback = await db.feedback.update({
            where: { id },
            data: {
                votes: {
                    increment: value
                }
            }
        });

        return new NextResponse(JSON.stringify(feedback), { status: 200 });
    } catch (error) {
        console.error("Error updating vote:", error);
        return new NextResponse(JSON.stringify({ error: "Failed to update vote" }), { status: 500 });
    }
}
