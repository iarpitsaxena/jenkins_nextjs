"use client"

import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

type LoginButtonProps = {
    label: string
    showIcon?: boolean;
    showDark?: boolean;
}

const LoginButton = ({ showIcon, label, showDark }: LoginButtonProps) => {
    return (
        <button className={cn("btn", showDark && "btn-neutral")} onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
            {showIcon && <FcGoogle className="size-5" />} <span className="tracking-wide">{label}</span>
        </button>
    );
}

export default LoginButton;