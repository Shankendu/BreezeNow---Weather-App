
import cloud from "../assets/cloudy.png";
import home from "../assets/rain.png";
import about from "../assets/info.png";
// import sun from "../assets/sun.png";
// import moon from "../assets/moon.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <div id='navbar' className='m-5 h-24 lg:h-[calc(100vh-40px)] w-[calc(100vw-40px)] lg:w-24 bg-[#393A5A] rounded-2xl p-5 flex flex-row lg:flex-col items-center lg:justify-normal justify-between'>
        <NavLink to="/" className="logo cursor-pointer basis-[30%] lg:basis-[10%]">
            <img className=" h-10 lg:h-10" src={cloud} alt="logo" />
        </NavLink>
        <div className="flex flex-row lg:flex-col items-center justify-center gap-x-8 ml-5 lg:ml-0">
        <NavLink to="/weather" className="home flex flex-col items-center  lg:mt-20  lg:mb-7 cursor-pointer">
            <img className="h-7" src={home} alt="home" />
            <p className="font-normal text-xs text-[#E9E9E9]">Weather</p>
        </NavLink>
        <NavLink to="/weather/about" className="about flex flex-col items-center  lg:mb-7  cursor-pointer">
        <img className="h-7" src={about} alt="about" />
        <p className="font-normal text-xs text-[#E9E9E9]">About</p>
        </NavLink>
        </div>
       
    </div>
    </>
  )
}
