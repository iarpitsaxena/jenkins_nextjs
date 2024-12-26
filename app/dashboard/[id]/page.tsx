"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { LuLoader } from "react-icons/lu";
import { RiArrowGoBackLine } from "react-icons/ri";
import BoardDetails from "../_components/BoardDetails";
import Feedbacks from "../_components/Feedbacks";

interface Board {
    id: string;
    name: string;
    createdAt: string;
    feedbacks: [];
}

const BoardPage = () => {
    const { data: session } = useSession();
    const pathname = usePathname();
    const [board, setBoard] = useState<Board | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchBoard = useCallback(async () => {
        if (!session?.user?.email) return;
        try {
            const id = pathname.split("/").pop();
            const response = await fetch("/api/board/one", {
                method: "POST",
                body: JSON.stringify({ id }),
            });
            const data = await response.json();
            setBoard(data);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [session?.user?.email]);

    useEffect(() => {
        fetchBoard();
    }, [fetchBoard]);

    if (isLoading) {
        return (
            <div className="pt-8 flex justify-center md:h-[88vh]">
                <LuLoader className="animate-spin size-6" />
            </div>
        );
    }

    return (
        <div className="w-9/12 mx-auto md:h-[88vh] py-6">
            <Link href={"/dashboard"}>
                <button className="btn bg-white">
                    <RiArrowGoBackLine /> Back
                </button>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div>
                    <BoardDetails
                        id={board?.id || ""}
                        name={board?.name || ""}
                        createdAt={board?.createdAt || ""}
                        feedbackCount={board?.feedbacks?.length || 0}
                    />
                </div>
                <div>
                    <Feedbacks feedbacks={board?.feedbacks || []} />
                </div>
            </div>
        </div>
    );
};

export default BoardPage;
