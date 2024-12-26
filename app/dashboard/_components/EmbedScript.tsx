import { useState } from "react";
import { MdContentCopy } from "react-icons/md";

interface EmbedScriptProps {
    boardId: string;
}

const EmbedScript = ({ boardId }: EmbedScriptProps) => {
    const [copied, setCopied] = useState(false);

    const script = `<script src="https://feebo.vercel.app/embed.js" data-board-id="${boardId}"></script>`;

    const handleCopy = () => {
        navigator.clipboard.writeText(script);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="mt-6">
            <p className="text-sm mb-1 font-bold">Embed Script</p>
            <div className="relative px-4 py-2.5 rounded-box bg-base-100 w-96">
                <pre className="text-sm overflow-x-auto">
                    {script}
                </pre>
                <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 btn btn-neutral btn-sm"
                >
                    {copied ? "Copied!" : <><MdContentCopy /> Copy</>}
                </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
                Add this script to your HTML file to display a feedback button
            </p>
        </div>
    );
};

export default EmbedScript; 