import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const DELETE = async (req: Request) => {
    try {
        const body = await req.json();
        const { id } = body;

        const deletedFeedback = await db.feedback.delete({
            where: { id }
        });

        if (!deletedFeedback) {
            return new NextResponse(JSON.stringify({ error: "Feedback not found" }), { status: 404 });
        }

        return new NextResponse(JSON.stringify(deletedFeedback), { status: 200 });
    } catch (error) {
        console.error("Error deleting feedback:", error);
        return new NextResponse(JSON.stringify({ error: "Failed to delete feedback" }), { status: 500 });
    }
}
