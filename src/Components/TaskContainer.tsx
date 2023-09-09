import { TaskFooter, TaskHeader } from "."


export const TaskContainer = () => {
    return (
        <div className="flex flex-col gap-8">
            <TaskHeader />
            <main className="flex flex-col gap-4">
                <h4 className="text-gray-900 font-semibold text-base">
                    My Tasks
                </h4>
                <ul className="flex flex-col gap-4">
                    <li className="bg-gray-50 w-full h-[72px] py-4 px-6 flex justify-between items-center border-b border-gray-200">
                        <div className="flex items-center gap-3">
                            {/* <input type="checkbox" className="h-5 w-5 bg" /> */}
                            <button className="h-5 w-5 border border-gray-300 bg-white rounded-md hover:border-gray-400 hover:bg-gray-100"></button>
                            <div className="flex flex-col gap-1">
                                <h5 className="text-gray-900 text-sm font-semibold">Design Landingpage</h5>
                                <p className="text-gray-600 text-sm font-normal">11:30 am - 12:00 pm</p>
                            </div>
                        </div>
                        <p className="text-gray-600 font-normal text-sm">
                            Today
                        </p>
                    </li>
                </ul>
            </main>
            <TaskFooter />
        </div>
    )
}