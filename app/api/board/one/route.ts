import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const body = await req.json();
    const { id } = body;

    const board = await db.board.findUnique({
        where: { id },
        include: {
            feedbacks: {
                orderBy: {
                    votes: 'desc'
                }
            }
        },
    })

    return new NextResponse(JSON.stringify(board), { status: 200 });
}