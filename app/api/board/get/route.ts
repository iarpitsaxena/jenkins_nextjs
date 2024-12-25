import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const body = await req.json();
    const { email } = body;

    // get user by email
    const user = await db.user.findUnique({
        where: {
            email
        }
    });

    if (!user) {
        return new NextResponse(JSON.stringify({ message: "User not found" }), { status: 404 });
    }

    // get all boards by user id
    const boards = await db.board.findMany({
        where: {
            userId: user.id
        }
    });

    return new NextResponse(JSON.stringify(boards), { status: 200 });
}