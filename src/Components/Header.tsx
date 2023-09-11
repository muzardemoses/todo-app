import AvatarImg from '../Images/avatar.png'
import SettingsSVG from '../assets/settings.svg'
import BellSVG from '../assets/bell.svg'
import menuSVG from '../assets/menu-02.svg'


export const Haeder = () => {
    return (
        <div className="py-4 px-16 flex justify-between items-center border-b border-gray-100 sm:px-4">
            <h2 className=" font-['Inter'] text-2xl font-bold">
                ToDo
            </h2>
            <div className="flex items-center gap-4 sm:hidden">
                <div className='flex items-center gap-3'>
                    <img src={SettingsSVG} alt="settings" className="hover:cursor-pointer" />
                    <img src={BellSVG} alt="bell" className="hover:cursor-pointer" />
                </div>
                <img src={AvatarImg} alt="avatar" className="w-10 h-10 rounded-full" />
            </div>
            <button className='hidden sm:block p-2'>
                <img src={menuSVG} alt='menu icon' className='h-6 w-6' />
            </button>
        </div>
    )
}