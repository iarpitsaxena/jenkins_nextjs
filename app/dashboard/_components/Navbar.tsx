import Link from "next/link";
import ProfileButton from "./ProfileButton";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-[12vh] bg-base-100 w-10/12 mx-auto">
            <div className="flex-1">
                <ProfileButton />
            </div>
            <div className="flex-none">
                <Link href={"https://feebo.vercel.app/b/676cefd7863d55bccf80d889"} target="_blank">
                    <button className="btn">💡 Feedback?</button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;