import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const body = await req.json();
    const { email, name } = body;

    // check for unique board name
    const existingBoard = await db.board.findFirst({
        where: {
            name
        }
    })

    if (existingBoard) {
        return new NextResponse(JSON.stringify({ error: "Board name already exists" }), { status: 400 });
    }

    // get user id
    const user = await db.user.findFirst({
        where: {
            email
        }
    })

    // create new board
    const newBoard = await db.board.create({
        data: {
            name,
            userId: user?.id as string
        }
    })

    if (!newBoard) {
        return new NextResponse(JSON.stringify({ error: "Board creation failed" }), { status: 500 });
    }

    return new NextResponse(JSON.stringify(newBoard), { status: 200 });
}