import ProfileButton from "./ProfileButton";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-[12vh] bg-base-100 w-10/12 mx-auto">
            <div className="flex-1">
                <ProfileButton />
            </div>
            <div className="flex-none">
                <button className="btn">💡 Feedback?</button>
            </div>
        </nav>
    );
}

export default Navbar;