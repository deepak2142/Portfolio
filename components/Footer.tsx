import Link from "next/link"
import { FaLaptopCode, FaCode, FaUserAlt, FaMailchimp } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="w-full h-14 fixed bottom-0 bg-white flex items-center">
        <div className="w-full h-[50%] flex justify-around content-center md:hidden">
            <Link href="#"><span className=""><FaLaptopCode size={25} /></span></Link>
            <Link href="#"><span className=""><FaCode size={25} /></span></Link>
            <Link href="#"><span className=""><FaUserAlt size={25} /></span></Link>
            <Link href="#"><span className=""><FaMailchimp size={25} /></span></Link>
        </div>
        
        <div className="w-full h-[50%] hidden justify-around content-center md:mlex"></div>
    </footer>
  )
}

export default Footer