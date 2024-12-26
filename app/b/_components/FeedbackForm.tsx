"use client"

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { LuLoader } from "react-icons/lu";

interface FeedbackFormProps {
    onSubmit?: (feedback: any) => void;
}

const FeedbackForm = ({ onSubmit }: FeedbackFormProps) => {
    const params = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch("/api/feedback/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    description,
                    boardId: params.id
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to create feedback");
            }

            const newFeedback = await response.json();

            setTitle("");
            setDescription("");
            onSubmit?.(newFeedback);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="pt-12">
            <div className="card bg-white w-96">
                <div className="card-body">
                    <h2 className="text-md font-bold text-error-content">Suggest something</h2>
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Short Title</span>
                                </div>
                                <input type="text" placeholder="Custom Components" className="input input-bordered w-full max-w-xs" value={title} onChange={(e) => setTitle(e.target.value)} required />
                            </label>
                        </div>
                        <div className="mt-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Description</span>
                                </div>
                                <textarea className="textarea textarea-bordered h-24" placeholder="I need custom ui components based on my brand." value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                            </label>
                        </div>
                        <div className="card-actions mt-4">
                            <button
                                type="submit"
                                className="btn btn-warning w-full"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <LuLoader className="animate-spin size-4" />
                                        Creating...
                                    </>
                                ) : (
                                    "Create Post"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-2 ms-4 text-sm text-error-content">
                <Link href={"https://feebo.vercel.app/"} target="_blank">Powered by <span className="underline underline-offset-1">Feebo</span></Link>
            </div>
        </div>
    );
}

export default FeedbackForm;