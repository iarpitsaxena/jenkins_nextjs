"use client"

import { useState } from "react";

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

const Feedbacks = ({ feedbacks }: FeedbacksProps) => {
    const [votedFeedbacks, setVotedFeedbacks] = useState<Set<string>>(new Set());

    const handleVote = async (id: string) => {
        const isVoted = votedFeedbacks.has(id);
        const voteValue = isVoted ? -1 : 1;

        try {
            const response = await fetch("/api/feedback/vote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id,
                    value: voteValue
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to update vote");
            }

            // Toggle voted state
            const newVotedFeedbacks = new Set(votedFeedbacks);
            if (isVoted) {
                newVotedFeedbacks.delete(id);
            } else {
                newVotedFeedbacks.add(id);
            }
            setVotedFeedbacks(newVotedFeedbacks);

        } catch (error) {
            console.error("Error voting:", error);
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
                <div className="space-y-4 max-h-[74vh] overflow-scroll">
                    {feedbacks.map((feedback) => (
                        <div key={feedback.id} className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="card-title">{feedback.title}</h3>
                                        <p className="text-gray-600 mt-2">{feedback.description}</p>
                                    </div>
                                    <button
                                        onClick={() => handleVote(feedback.id)}
                                        className={`text-xl btn ${votedFeedbacks.has(feedback.id) ? 'btn-primary' : 'btn-neutral'} cursor-pointer`}
                                    >
                                        👍 {feedback.votes}
                                    </button>
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
