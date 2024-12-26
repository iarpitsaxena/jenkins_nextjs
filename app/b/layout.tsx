export default function BoardLayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <div className="bg-base-200 p-8 min-h-screen">
            {children}
        </div>
    );
}