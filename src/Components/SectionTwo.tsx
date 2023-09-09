import { TaskContainer, RightContainer } from "."

export const SectionTwo = () => {
    return (
        <div className="h-full flex gap-6 justify-between">
            <div>
                <TaskContainer />
            </div>
            <div className="flex shrink-0 self-stretch pl-6 border-l border-gray-400">
                <RightContainer />
            </div>
        </div>
    )
}