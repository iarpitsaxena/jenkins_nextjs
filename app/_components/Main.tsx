import Link from "next/link";

const Main = () => {
    return (
        <main>
            {/* Section */}
            <section className="flex flex-col justify-center items-center py-24 bg-white">
                <div className="grid lg:grid-cols-12 gap-12 md:gap-16 max-w-7xl px-4">
                    <div className="lg:col-span-5">
                        <div className="bg-base-200 text-base-content rounded-3xl p-8 md:p-8 ">
                            <div className="font-medium uppercase tracking-wide text-base-content/50 text-sm mb-3">
                                Latest feedback
                            </div>
                            <div className="space-y-3">
                                <div className="relative p-4 bg-base-100 rounded-box flex justify-between gap-6">
                                    <div className="absolute left-2/3 -top-4 -translate-y-1/2 -translate-x-full flex flex-col items-center gap-1 text-base-content-secondary text-sm font-medium drop-shadow-xl">
                                        <span className="mb-4">Build this ✅</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-1">Better Components</p>
                                        <p className="opacity-80">
                                            There should be more good components with good UI to integrate.
                                        </p>
                                    </div>
                                    <button className="px-4 py-2 rounded-box group text-center text-lg duration-150 border border-base-content/10 bg-base-100 text-base-content">
                                        👍🏻 <br />89
                                    </button>
                                </div>
                                <div className="p-4 bg-base-100 rounded-box flex justify-between ">
                                    <div>
                                        <p className="font-semibold mb-1">More Themes</p>
                                        <p className="opacity-80">More customization on themes.</p>
                                    </div>
                                    <button className="px-4 py-2 rounded-box group text-center text-lg duration-150 border border-base-content/10 bg-base-100 text-base-content">
                                        👍🏻 <br />
                                        23
                                    </button>
                                </div>
                                <div className="relative p-4 bg-base-100 rounded-box flex justify-between ">
                                    <div className="absolute left-2/3 -bottom-6 -translate-x-full flex flex-col items-center gap-1 text-base-content-secondary text-sm font-medium drop-shadow-xl">
                                        <span>Not this ❌</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-1">Dark mode</p>
                                        <p className="opacity-80">There should be dark mode also.</p>
                                    </div>
                                    <button className="px-4 py-2 rounded-box group text-center text-lg duration-150 border border-base-content/10 bg-base-100 text-base-content">
                                        👍🏻 <br />
                                        9
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-lg:order-first lg:col-span-7 flex flex-col items-center lg:items-start gap-10 justify-center lg:justify-start max-w-3xl text-center lg:text-left">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-[-0.01em] leading-none font-black">
                            Build what users (really) want
                        </h1>
                        <p className="text-lg leading-relaxed text-base-content-secondary max-w-[450px]">
                            Collect feedback from your customers, prioritize features, and build a
                            product users love.
                        </p>
                        <div className="">
                            <Link href={"/dashboard"}>
                                <button className="btn btn-neutral btn-lg">
                                    Collect feedback for free
                                </button>
                            </Link>
                            <p className="text-sm text-base-content-secondary/80 mt-2">
                                It&apos;s 100% free. Really.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section */}
            <section className="py-16 px-4 bg-neutral-800 w-full text-neutral-content flex flex-col md:flex-row justify-center items-center gap-2 max-md:text-center text-lg md:text-xl">
                <span className="font-semibold">Where&apos;s the pricing?</span>
                <span>
                    <span className="text-neutral-content/90">
                        There&apos;s none, because Feebo is 100% free
                    </span>{" "}
                    <span>💛</span>
                </span>
            </section>

            {/* Section */}
            <section className="flex justify-center items-center w-full bg-warning text-neutral-900 py-20 xl:py-32 rounded-b-3xl xl:rounded-b-[48px]">
                <div className="max-w-7xl px-8 py-16 md:py-32 text-center">
                    <h2 className="max-w-3xl font-black text-4xl md:text-6xl lg:text-7xl tracking-[-0.01em] mb-16 md:mb-32">
                        Build features users (really) want
                    </h2>
                    <Link href={"/dashboard"}>
                        <button className="btn btn-neutral btn-lg text-white font-bold capitalize shadow">
                            Collect feedback for free
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Main;