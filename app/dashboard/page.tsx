import Boards from "./_components/Boards";
import CreateBoard from "./_components/CreateBoard";

const DashboardPage = () => {
    return (
        <div className="w-9/12 mx-auto md:h-[88vh] py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <CreateBoard />
                </div>
                <div>
                    <Boards />
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;