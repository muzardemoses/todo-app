/* eslint-disable @typescript-eslint/no-explicit-any */
import ArrowLeftSVG from "../assets/arrow-left.svg"
import ArrowRightSVG from "../assets/arrow-right.svg"




export const TaskFooter = ({ totalPages, handlePageChange, currentPage }: { totalPages: any, handlePageChange: any, currentPage: any }) => {


    // Function to generate pagination buttons
    const generatePaginationButtons = () => {
        const buttons = [];
        const maxButtonsToShow = 10; // Maximum number of buttons to show

        if (totalPages <= maxButtonsToShow) {
            // If there are fewer pages than the maximum, show all pages
            for (let i = 1; i <= totalPages; i++) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => handlePageChange(i)}
                        className={`h-10 w-10 rounded-full flex justify-center items-center font-medium hover:bg-gray-50 transition duration-500 ease-in-out sm:h-8 sm:w-8 ${currentPage === i ? 'bg-gray-50 text-gray-800' : 'text-gray-600'}`}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            // If there are more pages than the maximum, show a truncated set with ellipsis
            const firstButton = Math.max(currentPage - 2, 1);
            const lastButton = Math.min(currentPage + 2, totalPages);

            for (let i = firstButton; i <= lastButton; i++) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => handlePageChange(i)}
                        className={`h-10 w-10 rounded-full flex justify-center items-center font-medium hover:bg-gray-50 transition duration-500 ease-in-out sm:h-8 sm:w-8 ${currentPage === i ? 'bg-gray-50 text-gray-800' : 'text-gray-600'}`}
                    >
                        {i}
                    </button>
                );
            }

            if (firstButton > 1) {
                buttons.unshift(
                    <button key="ellipsis-start" disabled className="h-10 w-10 flex justify-center items-center sm:h-8 sm:w-8">
                        ...
                    </button>
                );
            }

            if (lastButton < totalPages) {
                buttons.push(
                    <button key="ellipsis-end" disabled className="h-10 w-10 flex justify-center items-center sm:h-8 sm:w-8">
                        ...
                    </button>
                );
            }
        }

        return buttons;
    };


    return (
        <div className="pt-5 flex justify-between items-center border-t border-gray-200 sm:pt-3">
            <button className={`h-10 flex gap-2 items-center ${currentPage === 1 ? "opacity-50" : ""}`}
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                <img src={ArrowLeftSVG} alt="arrow-left" className="w-5 h-5 sm:w-4 sm:h-4" />
                <p className="text-gray-600 font-semibold text-sm">
                    Previous
                </p>
            </button>
            <div className="flex gap-0 justify-center items-center">
                {generatePaginationButtons()}
            </div>
            <button className={`h-10 flex gap-2 items-center ${currentPage === totalPages ? "opacity-50" : ""}`}
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                <p className="text-gray-600 font-semibold text-sm">
                    Next
                </p>
                <img src={ArrowRightSVG} alt="arrow-right" className="w-5 h-5 sm:w-4 sm:h-4" />
            </button>
        </div>
    )
}