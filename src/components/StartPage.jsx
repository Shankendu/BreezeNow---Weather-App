import startVid from "../assets/start2.mp4";
import cloud from "../assets/cloudy.png";
import { NavLink} from "react-router-dom";

const StartPage = () => {
  return (
    <>
      <div
        id="parentContainer"
        className="h-screen w-full bg-[#22222E] flex flex-col md:flex-row justify-center items-center p-[25px] gap-y-[25px] md:gap-x-[25px]"
      >
        <section
          id="left"
          className="bg-[#393A5A] h-[50%] md:h-[calc(100%-25px)] w-full md:w-[60%] rounded-2xl basis-[50%]"
        >
          <video
            className="h-full w-full object-cover object-center rounded-2xl"
            autoPlay
            muted
            loop
          >
            <source className="" src={startVid} type="video/mp4" />
          </video>
        </section>

        <section
          id="right"
          className=" h-[calc(100%-25px)] w-[50%] md:w-40% rounded-2xl flex justify-center items-center basis-[40%]"
        >
          <div className=" flex flex-col items-center">
          <img className=" h-16 sm:h-20 md:h-24 " src={cloud} alt="cloud" />
            <h1 className="font-extrabold text-[40px] sm:text-5xl md:text-6xl font-poppins text-[#E9E9E9] mt-8">BreezeNow</h1>
            <p className="mb-12 sm:mt-2 text-lg sm:text-xl md:text-2xl text-[#e9e9e9b2] font-poppins font-normal">Weather App</p>
            <NavLink to="/weather">
            <button className=" md:h-16 md:w-[20rem] bg-[#393A5A] hover:bg-[#706F8E] text-[#E9E9E9] text-xl font-poppins px-10 py-3 rounded-full transition-all">Get Breezy</button>
            </NavLink>
          </div>
        </section>
      </div>
    </>
  );
};

export default StartPage;
