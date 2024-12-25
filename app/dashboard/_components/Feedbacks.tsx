"use client"

import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

interface Feedback {
    id: string;
    title: string;
    description: string;
    votes: number;
    createdAt: string;
}

interface FeedbacksProps {
    feedbacks: Feedback[];
}

const Feedbacks = ({ feedbacks: initialFeedbacks }: FeedbacksProps) => {
    const [feedbacks, setFeedbacks] = useState(initialFeedbacks);

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this feedback?")) return;

        try {
            const response = await fetch("/api/feedback/delete", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error("Failed to delete feedback");
            }

            // Update local state by removing the deleted feedback
            setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
        } catch (error) {
            console.error("Error deleting feedback:", error);
            alert("Failed to delete feedback");
        }
    };

    return (
        <div>
            <h2 className="font-bold text-2xl mb-4 text-error-content">Feedbacks</h2>
            {feedbacks.length === 0 ? (
                <div className="text-gray-500">
                    No feedbacks yet. Share your board to get some!
                </div>
            ) : (
                <div className="space-y-4">
                    {feedbacks.map((feedback) => (
                        <div key={feedback.id} className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="card-title">{feedback.title}</h3>
                                        <p className="text-gray-600 mt-2">{feedback.description}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="badge badge-neutral">
                                            {feedback.votes} votes
                                        </div>
                                        <button
                                            onClick={() => handleDelete(feedback.id)}
                                            className="btn btn-ghost text-error"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-500 mt-2">
                                    Added on {new Date(feedback.createdAt).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Feedbacks;
