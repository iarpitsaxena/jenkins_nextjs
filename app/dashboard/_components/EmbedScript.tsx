import { useState } from "react";
import { MdContentCopy, MdSettings } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

interface EmbedScriptProps {
    boardId: string;
}

interface ButtonCustomization {
    backgroundColor: string;
    textColor: string;
    borderRadius: number;
    buttonText: string;
}

const EmbedScript = ({ boardId }: EmbedScriptProps) => {
    const [copied, setCopied] = useState(false);
    const [showCustomize, setShowCustomize] = useState(false);
    const [customization, setCustomization] = useState<ButtonCustomization>({
        backgroundColor: "#222222",
        textColor: "#ffffff",
        borderRadius: 10,
        buttonText: "💡 Feedback?"
    });

    const script = `<script src="https://feebo.vercel.app/embed.js" data-board-id="${boardId}" data-btn-bg="${customization.backgroundColor}" data-btn-color="${customization.textColor}" data-btn-radius="${customization.borderRadius}" data-btn-text="${customization.buttonText}"></script>`;

    const handleCopy = () => {
        navigator.clipboard.writeText(script);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleCustomizationChange = (key: keyof ButtonCustomization, value: string | number) => {
        setCustomization(prev => ({
            ...prev,
            [key]: value
        }));
    };

    return (
        <div className="mt-6">
            <div className="flex items-center gap-2">
                <p className="text-sm font-bold">Embed Button Script</p>
                <button
                    onClick={() => setShowCustomize(true)}
                    className="btn btn-sm btn-ghost"
                >
                    <MdSettings />
                </button>
            </div>

            {/* Dialog for customization */}
            <dialog className={`modal ${showCustomize ? 'modal-open' : ''}`}>
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-lg">Customize Embed Button</h3>
                        <button
                            onClick={() => setShowCustomize(false)}
                            className="btn btn-sm btn-circle btn-ghost"
                        >
                            <IoMdClose className="size-5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {/* Left side - Customization Controls */}
                        <div className="space-y-4">
                            <div>
                                <label className="label">
                                    <span className="label-text">Button Text</span>
                                </label>
                                <input
                                    type="text"
                                    value={customization.buttonText}
                                    onChange={(e) => handleCustomizationChange('buttonText', e.target.value)}
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Background Color</span>
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="color"
                                        value={customization.backgroundColor}
                                        onChange={(e) => handleCustomizationChange('backgroundColor', e.target.value)}
                                        className="w-12 h-12 rounded cursor-pointer"
                                    />
                                    <input
                                        type="text"
                                        value={customization.backgroundColor}
                                        onChange={(e) => handleCustomizationChange('backgroundColor', e.target.value)}
                                        className="input input-bordered flex-1"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Text Color</span>
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="color"
                                        value={customization.textColor}
                                        onChange={(e) => handleCustomizationChange('textColor', e.target.value)}
                                        className="w-12 h-12 rounded cursor-pointer"
                                    />
                                    <input
                                        type="text"
                                        value={customization.textColor}
                                        onChange={(e) => handleCustomizationChange('textColor', e.target.value)}
                                        className="input input-bordered flex-1"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Border Radius (px)</span>
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="50"
                                    value={customization.borderRadius}
                                    onChange={(e) => handleCustomizationChange('borderRadius', parseInt(e.target.value))}
                                    className="range"
                                />
                                <div className="text-center mt-1">{customization.borderRadius}px</div>
                            </div>
                        </div>

                        {/* Right side - Preview */}
                        <div className="flex flex-col items-center justify-center bg-base-200 rounded-box p-8">
                            <h3 className="font-semibold mb-8">Preview</h3>
                            <div className="relative w-full h-[300px] bg-white rounded-lg p-4">
                                <button
                                    style={{
                                        backgroundColor: customization.backgroundColor,
                                        color: customization.textColor,
                                        borderRadius: `${customization.borderRadius}px`,
                                        padding: '12px 24px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontWeight: 'bold',
                                        transition: 'transform 0.2s',
                                        position: 'absolute',
                                        bottom: '20px',
                                        right: '20px',
                                    }}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                >
                                    {customization.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="modal-action">
                        <button onClick={() => setShowCustomize(false)} className="btn">
                            Done
                        </button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={() => setShowCustomize(false)}>close</button>
                </form>
            </dialog>

            <div className="relative px-4 py-2.5 rounded-box bg-base-100 w-96 mt-4">
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