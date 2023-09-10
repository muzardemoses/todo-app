/* eslint-disable @typescript-eslint/no-explicit-any */
import plusSVG from '../assets/plus.svg';


export const SectionOne = ({ setCurrentContainer }: { setCurrentContainer: any }) => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col gap-1">
                <h4 className="text-gray-900 text-[30px] font-semibold">Good Morning!</h4>
                <p className="text-gray-600 text-base font-normal">You got some task to do. </p>
            </div>
            <button className='h-max px-4 py-2.5 flex justify-center items-center gap-2 bg-[#3F5BF6] shadow-blue-700 shadow-sm rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-500 ease-in-out'
                onClick={() => setCurrentContainer('create-task')}
            >
                <img src={plusSVG} className='h-5 w-5' alt="plus" />
                <p className='text-white'>
                    Create New Task
                </p>
            </button>
        </div>
    )
}