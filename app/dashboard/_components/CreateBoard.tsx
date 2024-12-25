"use client"

import { useSession } from "next-auth/react";
import React, { useState } from "react";

const CreateBoard = () => {
    const { data } = useSession();
    const [boardName, setBoardName] = useState("");
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!boardName) return;
        try {
            const res = await fetch("/api/board/create", {
                method: "POST",
                body: JSON.stringify({ name: boardName, email: data?.user?.email })
            })
            const resData = await res.json();
            console.log(resData);
        } catch (error) {
            console.log(error);
        }
        setBoardName("");
    }
    return (
        <div className="pt-12">
            <div className="card bg-white w-80">
                <div className="card-body">
                    <h2 className="text-xl font-bold">Build features your users <span className="bg-black text-white px-1 -rotate-6 absolute ml-1 rounded-sm">really</span> want</h2>
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Board name</span>
                                </div>
                                <input type="text" placeholder="My $100M SAAS" className="input input-bordered w-full max-w-xs" value={boardName} onChange={(e) => setBoardName(e.target.value)} required />
                            </label>
                        </div>
                        <div className="card-actions mt-8">
                            <button type="submit" className="btn btn-warning w-full">Create Board</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateBoard;