import Navbar from "./_components/Navbar";

export default function DashboardLayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <div>
            <Navbar />
            <div className="bg-base-200">
                {children}
            </div>
        </div>
    )
}