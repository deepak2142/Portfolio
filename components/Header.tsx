import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx"

const Header = () => {
    return (
        <header className='w-full h-12 pl-12 pr-12 pt-1 flex justify-between items-centers '>
            <div className="w-11 h-11 border-2 border-white rounded-3xl text-center flex items-center justify-center bg-blue-300 text-black font-extrabold text-xl">
                VS
            </div>
            <div className="h-9 pr-1 pt-1 md:flex gap-8">
                <div className="hidden md:flex gap-8 ">
                    <Link href="#" className=""><span className="text-md hover:text-gray-700 active:text-blue-500">Skills</span></Link>
                    <Link href="#"><span className="text-md hover:text-gray-700 active:text-blue-500">Edu</span></Link>
                    <Link href="#"><span className="text-md hover:text-gray-700 active:text-blue-500">Projects</span></Link>
                    <Link href="#"><span className="text-md hover:text-gray-700 active:text-blue-500">About me</span></Link>
                </div>
                {/* <button className="w-16 h-8 rounded-md cursor-pointer focus:bg-green-600 bg-green-500 text-black ">Contact</button> */}
            </div>
            <div className="    h-full flex items-center">
                <div className="flex items-center justify-around w-10 h-10 shadow-[0_4px_6px_rgba(50,50,93,0.1)] rounded-4xl">
                    <RxHamburgerMenu size={25} />
                </div>
            </div>
        </header>
    )
}

export default Header