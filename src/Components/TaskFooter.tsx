import ArrowLeftSVG from "../assets/arrow-left.svg"
import ArrowRightSVG from  "../assets/arrow-right.svg"




export const TaskFooter = () => {
    return (
        <div className="pt-5 flex justify-between items-center border-t border-gray-200">
            <button className="h-10 flex gap-2 items-center">
                <img src={ArrowLeftSVG} alt="arrow-left" className="w-5 h-5" />
                <p className="text-gray-600 font-semibold text-sm">
                    Previous
                </p>
            </button>
            <div></div>
            <button className="h-10 flex gap-2 items-center">
                <p className="text-gray-600 font-semibold text-sm">
                    Next
                </p>
                <img src={ArrowRightSVG} alt="arrow-right" className="w-5 h-5" />
            </button>
        </div>
    )
}