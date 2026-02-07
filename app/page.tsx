"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiChevronDown, HiChevronUp, HiOutlinePlusCircle, HiPlus, HiPlusCircle } from "react-icons/hi";
import { TbSourceCode } from "react-icons/tb";

import pro1img from "@/public/images/project1.jpg"
import dp from "@/public/images/hero.jpg"
import { FaGithub, FaHtml5, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { CgCloseR } from "react-icons/cg";

interface skillType {
  open: boolean,
  title: string,
  description: string
}

export default function Home() {
  const [slikkPop, setSkillPop] = useState<skillType | {}>({})
  return (
    <main className="bg-primary pl-4 pr-4 pt-8 flex flex-col gap-8">
      <SkillPop slikkPop={slikkPop} setSkillPop={setSkillPop} />
      <HeroSection />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="md:grid md:grid-cols-2 items-center">
      <div className="text-xl">
        <p className="">Hello i'm</p>
        <p className="font-medium text-2xl md:text-4xl">Vishal Singh</p>
        <p className="font-medium text-2xl md:text-4xl">Full-Stack Web Developer</p>
        <p className="text-2xl">& passionate Tech Enthusiast</p>
        <div className="flex gap-2 pt-2 items-center">
          {/* <Link href={"#"}> <button className="bg-blue-500 text-white font-medium w-18 h-8 rounded-2xl">Visit</button> </Link> */}
          <Link href={"#"}> <FaGithub size={25} cursor={"pointer"} /> </Link>
          <Link href={"#"}> <FaLinkedin size={25} cursor={"pointer"} /> </Link>
          <Link href={"#"}> <FaTwitter size={25} cursor={"pointer"} /> </Link>
          <Link href={"#"}><button className="flex text-center items-center border font-medium pl-4 pr-4 h-8 rounded-2xl border-gray-500/40 md:cursor-pointer active:border-blue-400 active:text-blue-400"><IoDocumentAttachOutline />Resume</button></Link>
        </div>
      </div>
      <div className="hidden md:flex justify-around items-center w-full">
        <div className="w-70 h-70 flex items-center justify-center bg-black  rounded-[0px_148px_0px_145px]">
          <div className="w-50 h-50 flex items-center justify-center bg-black  overflow-hidden rounded-[64px_12px_64px_12px]">
            <Image className="aspect-square " alt="Vishal Singh" src={dp} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="flex flex-col gap-2">
      <div className="md:grid md:grid-cols-[5fr_10fr] items-center">
        <div className="hidden md:flex justify-center w-full">
          <div className=" w-50 h-50">
            <Image className="aspect-square " alt="Vishal Singh" src={pro1img} loading="lazy" />
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold">I Skilled in?</h2>
          <div className="">
            <p className="text-[18px]">
              I’m passionate about technology and artificial intelligence, with a strong focus on web technologies. I work primarily with the MERN stack and modern databases, and I’m deeply interested in building scalable SaaS products. Alongside software, I actively explore electronics and robotics, blending hardware and code to create intelligent, real-world solutions.
            </p>
            <div className="hidden"></div>
          </div>
        </div>

      </div>
      <div className="">
        <div className="pt-6 flex flex-col md:grid md:grid-cols-2 justify-center">
          <SingleSkill title={"HTML"} small={"fjkal ajsfkaj sdkjfsdal akdfj ajk df"} full={"building scalable SaaS products. Alongside software, I actively explore electronics and robotics, blending hardware and code to create intelligent, real-world solutions."} />
          <SingleSkill title={"CSS"} small={"fjkal ajsfkaj sdkjfsdal akdfj ajk df"} full={"building scalable SaaS products. Alongside software, I actively explore electronics and robotics, blending hardware and code to create intelligent, real-world solutions."} />
          <SingleSkill title={"Javascript"} small={"fjkal ajsfkaj sdkjfsdal akdfj ajk df"} full={"building scalable SaaS products. Alongside software, I actively explore electronics and robotics, blending hardware and code to create intelligent, real-world solutions."} />
          <SingleSkill title={"Javascript"} small={"fjkal ajsfkaj sdkjfsdal akdfj ajk df"} full={"building scalable SaaS products. Alongside software, I actively explore electronics and robotics, blending hardware and code to create intelligent, real-world solutions."} />
          <SingleSkill title={"Javascript"} small={"fjkal ajsfkaj sdkjfsdal akdfj ajk df"} full={"building scalable SaaS products. Alongside software, I actively explore electronics and robotics, blending hardware and code to create intelligent, real-world solutions."} />
          <SingleSkill title={"Javascript"} small={"fjkal ajsfkaj sdkjfsdal akdfj ajk df"} full={"building scalable SaaS products. Alongside software, I actively explore electronics and robotics, blending hardware and code to create intelligent, real-world solutions."} />
          <SingleSkill title={"Javascript"} small={"fjkal ajsfkaj sdkjfsdal akdfj ajk df"} full={"building scalable SaaS products. Alongside software, I actively explore electronics and robotics, blending hardware and code to create intelligent, real-world solutions."} />
          <SingleSkill title={"Javascript"} small={"fjkal ajsfkaj sdkjfsdal akdfj ajk df"} full={"building scalable SaaS products. Alongside software, I actively explore electronics and robotics, blending hardware and code to create intelligent, real-world solutions."} />
          <SingleSkill title={"Javascript"} small={"fjkal ajsfkaj sdkjfsdal akdfj ajk df"} full={"building scalable SaaS products. Alongside software, I actively explore electronics and robotics, blending hardware and code to create intelligent, real-world solutions."} />
          <SingleSkill title={"Javascript"} small={"fjkal ajsfkaj sdkjfsdal akdfj ajk df"} full={"building scalable SaaS products. Alongside software, I actively explore electronics and robotics, blending hardware and code to create intelligent, real-world solutions."} />
        </div>
      </div>
    </section>
  )
}

function SingleSkill(skill: {
  title: String,
  small: String,
  full: String
}) {
  const [ext, setExt] = useState<boolean>(false);

  return (
    <div className="p-2 h-full">
      <div className="flex gap-2 items-center text-center font-semibold" onClick={() => setExt(prev => !prev)}>
        <span className="text-lg flex text-center items-center gap-1 cursor-pointer"><FaHtml5 />  {skill.title}</span>
        <HiOutlinePlusCircle size={20} cursor={"pointer"} />
      </div>
      <div className="text-[18px]">{skill.small}</div>
      {ext && <div className="text-[18px]">
        {skill.full}
      </div>}
    </div>
  )
}

function Projects() {
  return (
    <section className="flex gap-6 flex-col">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="flex gap-6 flex-col">
        <Project />
        <Project />
      </div>
    </section>
  )
}

function Project() {
  return (
    <div className="grid grid-cols-[1fr_2fr] md:cols-[0.5fr_3fr] gap-2 justify-center">
      <div className="w-full flex justify-center">
        <div className="flex items-center justify-center bg-neutral-400/20  md:h-50 md:w-50 ">
          <Image src={pro1img} alt="chat app with" loading="lazy" className="aspect-square" />
        </div>
      </div>
      <div className="flex gap0.5 md:gap-2 flex-col">
        <p className="text-lg font-bold cursor-pointer flex gap-1">Link Up<Link href={"#"}><button className="flex text-center items-center border  font-semibold pl-4 pr-4 h-8 rounded-2xl border-blue-400 text-blue-400 active:border-blue-700 active:text-blue-700
        ">Summary</button></Link></p>
        <p className="md:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit ...</p>

        <p className="hidden md:flex">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi reiciendis officia Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, consequatur minus omnis soluta deleniti cumque dolores animi in obcaecati voluptas illum illo ad saepe nulla esse sint? Quidem porro perferendis quae possimus, veritatis, optio minus odit nobis tempora provident enim at. Omnis, est mollitia?</p>
        <div className="flex gap-2 pt-2">
          <Link href={"#"}> <button className="bg-blue-500 active:bg-blue-600 text-white font-medium w-18 h-8 rounded-2xl">Visit</button> </Link>
          <Link href={"#"}><button className="flex text-center items-center border font-medium pl-4 pr-4 h-8 rounded-2xl border-gray-500/40 active:border-blue-400 active:text-blue-400
        "><TbSourceCode />repository</button></Link>
        </div>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <section className="">
      <h2 className="text-2xl font-bold">Exprience</h2>
      <div className="">
        <p className="text-[18px]">
          I’m passionate about technology and artificial intelligence, with a strong focus on web technologies. I work primarily with the MERN stack and modern databases, and I’m deeply interested in building scalable SaaS products. Alongside software, I actively explore electronics and robotics, blending hardware and code to create intelligent, real-world solutions.
        </p>
        <div className="hidden"></div>
      </div>
      <div className="pt-6 gap-6 flex flex-col">

      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="flex gap-6 flex-col">
      <h2 className="text-2xl font-bold">Education</h2>
      <div className="flex gap-4 flex-col md:grid md:grid-cols-2">
        {/*  */}
        <div className="">
          <p className="text-lg font-bold">Bachelors of Computer Application</p>
          <p className="">year: 2023 to 2026</p>
          <p className="">From: Jai Narayan Viyas University (Jodhpur)</p>
        </div>
        {/*  */}
        <div className="">
          <p className="text-lg font-bold">12<sup>th</sup> : PCMB 63%</p>
          <p className="">year: 2022</p>
          <p className="">From: HSC Board (Kolhapur, Maharastra)</p>
        </div>
        {/*  */}
        <div className="">
          <p className="text-lg font-bold">10<sup>th</sup> : All Subjects 78.4%</p>
          <p className="">year: 2022</p>
          <p className="">From: RBSE Board (Rajasthan)</p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="">
      <div className="grid gap-4">
        <div className="">
          <p className="text-2xl font-bold">Contact Us</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="">
            <div className="">
              <div className="flex flex-col gap-2">
                <label htmlFor="">Name / Organization</label>
                <input type="text" name="" id="" placeholder="enter your name" className="pl-0.5 border-2 border-gray-800/30 rounded-md text-[18px] focus:text-[14px] focus:outline-gray-600/50" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Phone Number</label>
                <input type="text" name="" id="" placeholder="enter your phone number" className="pl-0.5 border-2 border-gray-800/30 rounded-md text-[18px] focus:text-[14px] focus:outline-gray-600/50" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Email</label>
                <input type="text" name="" id="" placeholder="enter your email address" className="pl-0.5 border-2 border-gray-800/30 rounded-md text-[18px] focus:text-[14px] focus:outline-gray-600/50" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="">Message (Optional)</label>
              <textarea name="" id="message" placeholder="Enter your message here" className="min-h-20 md:min-h-38 resize-none border-2 border-gray-800/30 rounded-md text-[18px] focus:text-[14px] focus:outline-gray-600/50"></textarea>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:pt-4">
          <button className="bg-blue-500 text-white cursor-pointer font-medium w-18 h-8 rounded-2xl">submit</button>
        </div>
      </div>
      <div className="grid grid-cols-[4.5fr_1fr_4.5fr] pt-6 pb-6 items-center justify-center">
        <div className="h-0.5 w-full bg-black/50"></div>
        <div className="h-2 text-center flex items-center justify-center">or</div>
        <div className="h-0.5 w-full  bg-black/50"></div>
      </div>
      <div className="flex items-center justify-around">
        <Link href={""}><FaGithub size={25} cursor={"pointer"} /> </Link>
        <Link href={""}><FaTwitter size={25} cursor={"pointer"} /> </Link>
        <Link href={""}><FaInstagram size={25} cursor={"pointer"} /> </Link>
        <Link href={""}><FaLinkedin size={25} cursor={"pointer"} /> </Link>
        <Link href={""}><IoIosMail size={25} cursor={"pointer"} /> </Link>
        <Link href={""}><FaPhone size={25} cursor={"pointer"} /> </Link>
      </div>
    </section>
  )
}

function SkillPop({ slikkPop, setSkillPop } : {
  slikkPop: skillType| {},
  setSkillPop: React.SetStateAction<skillType | {}>
}) {
  return (
    <section className={`fixed top-4 r-0 bg-white h-[80%] rounded-2xl shadow-2xl  ${slikkPop ? 'w-[90%]' : 'w-0'}`}>
      <section className="pt-4 pl-4 flex gap-4 flex-col">
        <div className=""><CgCloseR size={25} cursor={"pointer"} /> </div>
        <div className="text-2xl font-bold">HTML</div>
        <div className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo rem necessitatibus animi voluptatibus praesentium repudiandae non expedita assumenda sequi debitis dolores aspernatur facere beatae, mollitia labore quae nostrum velit recusandae ipsam enim quia voluptate nisi sed dolor. Et perferendis minima architecto eveniet fugit! Dolor mollitia, sed doloribus deleniti natus, rerum animi omnis voluptatum commodi atque velit tempora veritatis eveniet recusandae laborum quaerat molestiae ut dicta! Cumque minima veritatis illum repellat, earum fugit nostrum iste nam tenetur facilis nulla reprehenderit quo sunt in numquam odio rerum laborum, perferendis optio vel odit dolorem magni voluptatibus? Quidem necessitatibus aliquam ut cumque repellat eos maiores, corporis pariatur! Aut similique vitae magnam aspernatur rerum veniam ad temporibus omnis rem doloremque. Quo eligendi adipisci aspernatur nemo perferendis, pariatur in omnis ab ipsum, facere recusandae? Minima, porro dignissimos, mollitia provident dolores, nam harum libero eveniet numquam voluptatum deleniti odio aspernatur? Facilis, autem iure? Magni magnam necessitatibus corrupti.</div>
      </section>
    </section>
  )
}