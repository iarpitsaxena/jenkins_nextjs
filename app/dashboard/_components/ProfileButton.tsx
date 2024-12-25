"use client"

import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { IoIosArrowDown, IoMdLogOut } from "react-icons/io";
import { LuLoader } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";

type ProfileButtonProps = {
    shouldDark?: boolean;
    dashboard?: boolean;
}

const ProfileButton = ({ shouldDark, dashboard }: ProfileButtonProps) => {
    const { data, status } = useSession()
    if (status === "loading") {
        return (
            <LuLoader className="animate-spin size-5" />
        )
    }
    return (
        <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className={cn("btn m-1", shouldDark && "btn-neutral")}>
                {data && <img src={data.user?.image!} alt="profile_img" className="w-8 h-8 rounded-full" />}
                <span className="flex items-center gap-1">{data?.user?.name?.split(" ")[0]} <IoIosArrowDown /></span>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow">
                {dashboard && <li><Link className="text-error-content" href={"/dashboard"}>Dashboard <MdArrowOutward className="size-5" /></Link></li>}
                <li><a>{data?.user?.email}</a></li>
                <li onClick={() => signOut()} className="text-error-content"><a><IoMdLogOut className="size-4" />Logout</a></li>
            </ul>
        </div>
    );
}

export default ProfileButton;