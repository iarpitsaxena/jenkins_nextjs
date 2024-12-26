"use client"

import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

interface BoardDetailsProps {
    id: string;
    name: string;
    createdAt: string;
    feedbackCount: number;
}

const BoardDetails = ({
    id,
    name,
    createdAt,
    feedbackCount,
}: BoardDetailsProps) => {

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this board?")) return;

        try {
            const response = await fetch("/api/board/delete", {
                method: "DELETE",
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error("Failed to delete board");
            }

            // Redirect to dashboard after successful deletion
            window.location.href = "/dashboard";
        } catch (error) {
            console.error("Error deleting board:", error);
            alert("Failed to delete board");
        }
    }

    return (
        <div className="mt-4">
            <h2 className="font-bold text-error-content"><span className="text-2xl">{name}</span> - {feedbackCount} feedbacks</h2>
            <div className="mt-2">
                <p className="text-sm">Created On : {new Date(createdAt).toLocaleDateString()}</p>
            </div>
            <div className="mt-6">
                <p className="text-sm mb-1 font-bold">Public link</p>
                <div className="relative px-4 py-2.5 rounded-box bg-base-100 select-all md:w-96 w-80">
                    <div className="truncate">https://feebo.vercel.app/b/{id}</div>
                    <div className="absolute flex items-center gap-2 right-2 top-1/2 -translate-y-1/2">
                        <Link href={`https://feebo.vercel.app/b/${id}`} target="_blank" className="btn btn-neutral btn-sm btn-square" data-tooltip-id="tooltip" data-tooltip-content="Go to board">
                            <MdArrowOutward />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <button onClick={handleDelete} className="btn btn-ghost text-error-content">Delete <FaTrashAlt /></button>
            </div>
        </div>
    );
};

export default BoardDetails;
