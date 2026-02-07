"use client"
import Link from "next/link"
import { useState } from "react"
import { RxCross2, RxHamburgerMenu } from "react-icons/rx"


const Header = () => {
    const [ham, setHam] = useState<boolean>(false)
    return (
        <header className='w-full h-8 pl-8 pr-8 pt-1 flex justify-between items-centers '>
            <div className="w-11 h-11 border-2 border-white rounded-3xl text-center flex items-center justify-center bg-blue-300 text-black font-extrabold text-xl">
                VS
            </div>
            <div className="h-9 pr-1 pt-1 md:flex gap-8">
                <div className="hidden md:flex gap-8 ">
                    <Link href="#"><span className="text-md hover:text-gray-700 active:text-blue-500">Edu</span></Link>
                    <Link href="#"><span className="text-md hover:text-gray-700 active:text-blue-500">Projects</span></Link>
                    <Link href="#"><span className="text-md hover:text-gray-700 active:text-blue-500">About me</span></Link>
                </div>
            </div>
            <div className={`flex md:hidden h-full items-center `}>
                <div className={`flex shadow-[0_4px_6px_rgba(50,50,93,0.1)]  top-0  ${ham ? 'fixed right-0 w-[95%] h-[70%] pt-4 bg-white text-black rounded-2xl flex-col gap-4 items-center' : 'w-10 h-10 rounded-4xl items-center justify-center'}`}

                >
                    {
                        ham ? <RxCross2 size={30} onClick={() => setHam(prev => !prev)} /> : <RxHamburgerMenu size={25} onClick={() => setHam(prev => !prev)} />
                    }

                    <Link href="#" className={`${ham ? 'block' : 'hidden'}`}><span className="text-xl hover:text-gray-700 active:text-blue-500">Skills</span></Link>
                    <Link href="#" className={`${ham ? 'block' : 'hidden'}`}><span className="text-xl hover:text-gray-700 active:text-blue-500">Education</span></Link>
                    <Link href="#" className={`${ham ? 'block' : 'hidden'}`}><span className="text-xl hover:text-gray-700 active:text-blue-500">About</span></Link>
                    <Link href="#" className={`${ham ? 'block' : 'hidden'}`}><span className="text-xl hover:text-gray-700 active:text-blue-500">Experience</span></Link>
                    <Link href="#" className={`${ham ? 'block' : 'hidden'}`}><span className="text-xl hover:text-gray-700 active:text-blue-500">Contact</span></Link>


                </div>
            </div>
        </header>
    )
}

export default Header