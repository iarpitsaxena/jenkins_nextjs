const Footer = () => {
    return (
        <footer className="w-full px-[10vw] flex flex-col bg-base-200">
            <div className="font-black text-[20vw] text-center leading-none tracking-[-0.015em]">
                Feebo
            </div>
            <div className="flex flex-col items-center md:items-start gap-4 md:flex-row w-full md:justify-between text-sm py-6 mt-6 border-t border-neutral-content/10">
                <div>
                    <div className="flex flex-col md:flex-row justify-center items-center text-center gap-2 text-error-content">
                        <div className="max-md:max-w-[250px]">
                            By{" "}
                            <a className="link-hover" href="https://ditinagrawal.netlify.app" target="_blank" >
                                Ditin Agrawal
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-end gap-4">
                    <div className="flex gap-4 font-bold">
                        <a className="link-hover" href="https://x.com/ditinagrawal" target="_blank">
                            X
                        </a>
                        <a className="link-hover" href="https://github.com/ditinagrawal" target="_blank">
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;