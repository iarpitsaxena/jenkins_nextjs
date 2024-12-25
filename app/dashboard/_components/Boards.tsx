"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { LuLoader } from "react-icons/lu";

interface Board {
    id: string;
    name: string;
    createdAt: string;
}

const Boards = () => {
    const { data: session } = useSession();
    const [boards, setBoards] = useState<Board[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchBoards = useCallback(async () => {
        if (!session?.user?.email) return;

        try {
            const response = await fetch("/api/board/get", {
                method: "POST",
                body: JSON.stringify({ email: session.user.email }),
            });
            const data = await response.json();
            setBoards(data);
        } catch (err) {
            console.error(err)
        } finally {
            setIsLoading(false);
        }
    }, [session?.user?.email]);

    useEffect(() => {
        fetchBoards();
    }, [fetchBoards]);

    if (isLoading) {
        return (
            <div className="pt-8 flex justify-center">
                <LuLoader className="animate-spin size-6" />
            </div>
        );
    }

    return (
        <div className="pt-8">
            <h2 className="font-bold text-2xl mb-4">{boards.length} Boards</h2>
            {boards.length === 0 ? (
                <div className="text-gray-500">
                    No boards found. Create your first board!
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {boards.map((board) => (
                        <Link href={`/dashboard/${board.id}`} key={board.id} className="card bg-base-100 shadow-xl cursor-pointer hover:bg-neutral-800 hover:text-gray-50 transition-colors ease-in">
                            <div className="card-body">
                                <h3 className="card-title">{board.name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Boards;
