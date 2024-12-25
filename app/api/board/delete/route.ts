import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const DELETE = async (req: Request) => {
    try {
        const body = await req.json();
        const { id } = body;

        const deletedBoard = await db.board.delete({
            where: { id },
            include: { feedbacks: true },
        });

        if (!deletedBoard) {
            return new NextResponse(JSON.stringify({ error: "Board not found" }), { status: 404 });
        }

        return new NextResponse(JSON.stringify(deletedBoard), { status: 200 });
    } catch (error) {
        console.error("Error deleting board:", error);
        return new NextResponse(JSON.stringify({ error: "Failed to delete board" }), { status: 500 });
    }
}