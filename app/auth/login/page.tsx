import LoginButton from "@/components/LoginButton";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Login | Feebo",
};

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="card bg-neutral text-neutral-content w-96">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-5xl font-bold">Feebo</h2>
                    <p className="text-white/50">Please login to continue</p>
                    <div className="card-actions justify-end mt-6">
                        <LoginButton label="Continue with Google" showIcon />
                    </div>
                    <div className="mt-4">
                        <Link href={"/"} className="underline underline-offset-1 text-md">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;