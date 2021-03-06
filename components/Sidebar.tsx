import { BsMoonFill, BsSunFill, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaGithub, FaTelegramPlane } from "react-icons/fa";

//import { useState } from "react";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div
        className={`container w-full h-300 animate-in fade-in duration-1000 delay-0.5s fill-mode-backwards `}
      >
        <Image
          src="/images/eric-hero.jpg"
          alt="avatar"
          className=" mx-auto border rounded-t-md object-cover "
          height="512px"
          width="512px"
          layout="intrinsic"
          quality="100"
          priority
        />
      </div>
      <div className="bg-sky-900 -mt-1.5 py-2 filter backdrop-blur-xl bg-opacity-60 animate-in slide-in-from-bottom fade-in  duration-1000 delay-1s fill-mode-backwards">
        <h3 className=" text-3xl font-medium tracking-wider font-ubuntu ">
          <span className="text-sky-100">Eric Milfont</span>
        </h3>
        <h3 className=" text-lg tracking-wider font-extralight">
          <span className="text-sky-100 ">Full Stack Web Developer</span>
        </h3>
        <h3 className=" text-sm tracking-widest font-ubuntu">
          <span className="text-green-300">Available</span>
        </h3>
      </div>
      <div className="container mt-3  animate-in slide-in-from-bottom fade-in duration-1000 delay-1.5s fill-mode-backwards">
        <div className="flex justify-center ">
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <div className="absolute whitespace-nowrap w-full inset-0 font-extralight text-xl text-gray-900 dark:text-white -ml-7 mt-px animate-pulse opacity-75">
              <div className="hidden dark:inline">
                <BsMoonFill />
              </div>
            </div>
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              onChange={changeTheme}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white  appearance-none cursor-pointer"
              checked={theme === "light" ? true : false}
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-400 cursor-pointer"
            ></label>
            <div className="absolute whitespace-nowrap w-full inset-0 font-extralight text-xl text-gray-900 dark:text-white ml-12 animate-pulse opacity-75">
              <div className="dark:hidden">
                <BsSunFill />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container -mt-3 animate-in slide-in-from-bottom zoom-in duration-1000 delay-2s fill-mode-backwards ">
        <div className="container my-10 uppercase text-lg">
          <Link href="/contact#main">
            <a className="relative px-12 py-4 tracking-wider text-white rounded-lg group ">
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-sky-800 dark:bg-gray-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg "></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-cyan-500 dark:bg-gray-700 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen rounded-lg"></span>
              <span className="relative">Hire now!</span>
            </a>
          </Link>
        </div>

        <div className="container my-10 uppercase ">
          <Link href="/resume#main">
            <a className="relative px-16 py-4 tracking-wider text-white rounded-lg group">
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-sky-800 dark:bg-gray-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg "></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-cyan-700 dark:bg-gray-700 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen rounded-lg"></span>
              <span className="relative">Resume</span>
            </a>
          </Link>
        </div>
        <div className="container my-10 uppercase ">
          <Link href="/projects#main">
            <a className="relative px-14 py-4 tracking-wider text-white rounded-lg group">
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-sky-800 dark:bg-gray-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg "></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-cyan-700 dark:bg-gray-700 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen rounded-lg"></span>
              <span className="relative">Projects</span>
            </a>
          </Link>
        </div>
        <div className="container my-10 uppercase ">
          <Link href="/contact#main">
            <a className="relative px-11 py-4 tracking-wider text-white rounded-lg group">
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-sky-800 dark:bg-gray-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg "></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-cyan-700 dark:bg-gray-700 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen rounded-lg"></span>
              <span className="relative">Contact me</span>
            </a>
          </Link>
        </div>
        <div className="container max-w-screen-lg mx-auto mb-4">
          <div>
            <div className="flex flex-wrap justify-center gap-2">
              <Link href="https://bit.ly/ericmilfont">
                <button className="social-btn">
                  <BsLinkedin className="w-5 h-5" />
                </button>
              </Link>
              <Link href="https://github.com/ericmil87">
                <button className="social-btn">
                  <FaGithub className="w-5 h-5" />
                </button>
              </Link>
              <Link href="https://bit.ly/milfontwa">
                <button className="social-btn">
                  <BsWhatsapp className="w-5 h-5" />
                </button>
              </Link>
              <Link href="hhttps://t.me/ericmilfont">
                <button className="social-btn">
                  <FaTelegramPlane className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
