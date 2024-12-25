export default function BoardLayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <div className="bg-base-200 h-screen p-8">
            {children}
        </div>
    );
}