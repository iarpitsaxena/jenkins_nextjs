"use client"

import LoginButton from "@/components/LoginButton";
import { useSession } from "next-auth/react";
import ProfileButton from "../dashboard/_components/ProfileButton";

const Navbar = () => {
    const { data } = useSession();
    return (
        <nav className="flex justify-between items-center h-[12vh] w-10/12 mx-auto">
            <div className="flex-1">
                <h1 className="font-bold text-3xl">Feebo</h1>
            </div>
            <div className="flex-none">
                {data?.user ? <ProfileButton shouldDark dashboard /> : <LoginButton label="Get started" showDark />}
            </div>
        </nav>
    );
}

export default Navbar;