import temp from "../assets/temp.png";
import humid from "../assets/humid.png";
import pressure from "../assets/pressure.png";
import wind from "../assets/wind.png";
import searchpng from "../assets/search.png";
import cloudiness from "../assets/cloudiness.png";
import sunset from "../assets/sunset.png";
import sunrise from "../assets/sunrise.png";

const Shimmer = () => {
  return (
    <>
     <div className="lg:my-5 px-5 lg:px-0 lg:mr-5 lg:h-[calc(100vh-40px)] h-fit w-screen flex flex-col lg:flex-row ">
      <div id="leftForecast" className=" w-full lg:w-[70%] h-full mr-5">
        {/*  Search bar */}
        <div className="h-[50px] lg:h-[6%] w-[100%] mb-[1%] bg-[#393A5A] rounded-xl flex items-center relative">
          <input
            className="h-full w-[80%] bg-[#393A5A] rounded-xl px-5 font-poppins placeholder:font-poppins outline-none text-[#E9E9E9] basis-[80%]"
            type="text"
            placeholder="Search for cities"
          />
          <div className="bg-[#22222E] h-8 w-8 absolute right-5 flex justify-center items-center rounded-full cursor-pointer">
            <img className="h-5 " src={searchpng} alt="search" />
          </div>
        </div>

        {/* 2nd Data Block */}
        <div className="h-[30%] w-[100%] mb-[1%] rounded-2xl flex justify-between items-center p-5">
          <div
            id="weatherDataLeft"
            className="h-full w-[50%] pl-3 lg:pl-14 flex flex-col justify-center"
          >
            <div className="animate-pulse h-10 w-[80%] lg:h-10 lg:w-56 rounded-full bg-[#E9E9E9]"></div>
            <div className="rounded-full animate-pulse mt-1 mb-5 h-5 w-20 lg:h-7 lg:w-36 bg-[#e9e9e99f]"></div>
            <div className="animate-pulse rounded-full h-12 w-[80%] lg:h-20 lg:w-36 bg-[#E9E9E9]"></div>
          </div>
          <div
            id="weatherDataRight"
            className="h-full w-[50%] flex items-center justify-end lg:pr-10"
          >
            <div className="h-36 w-36 lg:h-48 lg:w-48 animate-pulse rounded-2xl bg-[#E9E9E9] "></div>
          </div>
        </div>

        {/* 3rd Data Block */}
        <div className="h-fit lg:h-[30%] w-[100%] bg-[#393A5A] mb-[1%] rounded-2xl p-5">
          <div className="h-full w-full pb-5">
            <h1 className="text-sm font-poppins font-bold text-[#E9E9E9]">
              TODAY&apos;S FORECAST
            </h1>
            <div className="w-full h-full pt-3">
              <div className=" w-full h-full flex flex-col lg:flex-row">
              {/* Forecast 1 */}
                <div className="flex flex-row lg:flex-col justify-between  items-center h-full w-full lg:w-[17%] border-b-2 lg:border-r-2 lg:border-b-0 border-[#e9e9e99f] p-2 ">
                  <h1 className="animate-pulse rounded-full w-12 h-4 lg:w-16 lg:h-5 bg-[#e9e9e99f]"></h1>
                  <div className="h-14 w-14 animate-pulse rounded-2xl bg-[#E9E9E9]"></div>
                  <h1 className="animate-pulse rounded-full w-12 h-4 lg:w-16 lg:h-6  bg-[#E9E9E9]"></h1>
                </div>
              {/* Forecast 2 */}
                <div className="flex flex-row lg:flex-col justify-between  items-center h-full w-full lg:w-[17%] border-b-2 lg:border-r-2 lg:border-b-0 border-[#e9e9e99f] p-2 ">
                  <h1 className="animate-pulse rounded-full w-12 h-4 lg:w-16 lg:h-5 bg-[#e9e9e99f]"></h1>
                  <div className="h-14 w-14 animate-pulse rounded-2xl bg-[#E9E9E9]"></div>
                  <h1 className="animate-pulse rounded-full w-12 h-4 lg:w-16 lg:h-6  bg-[#E9E9E9]"></h1>
                </div>
              {/* Forecast 3 */}
                <div className="flex flex-row lg:flex-col justify-between  items-center h-full w-full lg:w-[17%] border-b-2 lg:border-r-2 lg:border-b-0 border-[#e9e9e99f] p-2 ">
                  <h1 className="animate-pulse rounded-full w-12 h-4 lg:w-16 lg:h-5 bg-[#e9e9e99f]"></h1>
                  <div className="h-14 w-14 animate-pulse rounded-2xl bg-[#E9E9E9]"></div>
                  <h1 className="animate-pulse rounded-full w-12 h-4 lg:w-16 lg:h-6  bg-[#E9E9E9]"></h1>
                </div>
              {/* Forecast 4 */}
                <div className="flex flex-row lg:flex-col justify-between  items-center h-full w-full lg:w-[17%] border-b-2 lg:border-r-2 lg:border-b-0 border-[#e9e9e99f] p-2 ">
                  <h1 className="animate-pulse rounded-full w-12 h-4 lg:w-16 lg:h-5 bg-[#e9e9e99f]"></h1>
                  <div className="h-14 w-14 animate-pulse rounded-2xl bg-[#E9E9E9]"></div>
                  <h1 className="animate-pulse rounded-full w-12 h-4 lg:w-16 lg:h-6  bg-[#E9E9E9]"></h1>
                </div>
              {/* Forecast 5 */}
                <div className="flex flex-row lg:flex-col justify-between  items-center h-full w-full lg:w-[17%] border-b-2 lg:border-r-2 lg:border-b-0 border-[#e9e9e99f] p-2 ">
                  <h1 className="animate-pulse rounded-full w-12 h-4 lg:w-16 lg:h-5 bg-[#e9e9e99f]"></h1>
                  <div className="h-14 w-14 animate-pulse rounded-2xl bg-[#E9E9E9]"></div>
                  <h1 className="animate-pulse rounded-full w-12 h-4 lg:w-16 lg:h-6  bg-[#E9E9E9]"></h1>
                </div>
              {/* Forecast 6 */}
                <div className="flex flex-row lg:flex-col justify-between  items-center h-full w-full lg:w-[17%] border-b-2 lg:border-r-2 lg:border-b-0 border-[#e9e9e99f] p-2 ">
                  <h1 className="animate-pulse rounded-full w-12 h-4 lg:w-16 lg:h-5 bg-[#e9e9e99f]"></h1>
                  <div className="h-14 w-14 animate-pulse rounded-2xl bg-[#E9E9E9]"></div>
                  <h1 className="animate-pulse rounded-full w-12 h-4 lg:w-16 lg:h-6  bg-[#E9E9E9]"></h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4th Data Block */}
        <div className=" h-[200px] lg:h-[30%] w-[100%] bg-[#393A5A] rounded-2xl p-5 lg:mt-0 mt-5">
          <div className="w-full h-full pb-5">
            <h1 className="text-sm font-poppins font-bold text-[#E9E9E9]">
              AIR CONDITIONS
            </h1>
            <div className="w-full h-full flex pt-3">
              <div id="left" className="w-[50%] h-full pl-2 lg:pl-10">
                <div id="temp" className="h-[50%] w-full lg:mb-0  mb-3">
                  <div className="flex mb-1 items-center">
                    <img className="h-5" src={temp} alt="temperature" />
                    <span className="pl-1 font-poppins font-normal text-sm text-[#e9e9e99f]">
                      Feels like
                    </span>
                  </div>
                  <div className="rounded-full animate-pulse ml-6 w-14 h-8  bg-[#E9E9E9]"></div>
                </div>
                <div id="humid" className="h-[50%] w-full">
                  <div className="flex mb-1 items-center">
                    <img className="h-5" src={humid} alt="Humid" />
                    <span className="pl-1 font-poppins font-normal text-sm text-[#e9e9e99f]">
                      Humidity
                    </span>
                  </div>
                  <div className="rounded-full animate-pulse ml-6 w-14 h-8  bg-[#E9E9E9]"></div>
                </div>
              </div>
              <div id="right" className="w-[50%] h-full pl-2 lg:pl-0">
                <div id="wind" className="h-[50%] w-full lg:mb-0  mb-3">
                  <div className="flex mb-1 items-center">
                    <img className="h-5" src={wind} alt="Wind" />
                    <span className="pl-1 font-poppins font-normal text-sm text-[#e9e9e99f]">
                      Wind
                    </span>
                  </div>
                  <div className="rounded-full animate-pulse ml-6 w-14 h-8  bg-[#E9E9E9]"></div>
                </div>
                <div id="pressure" className="h-[50%] w-full">
                  <div className="flex mb-1 items-center">
                    <img className="h-5" src={pressure} alt="Pressure" />
                    <span className="pl-1 font-poppins font-normal text-sm text-[#e9e9e99f]">
                      Pressure
                    </span>
                  </div>
                  <div className="rounded-full animate-pulse ml-6 w-14 h-8  bg-[#E9E9E9]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RightForcast */}
      <div
        id="rightForecast"
        className=" w-full lg:w-[30%] h-[200px] lg:h-full rounded-2xl lg:mt-0 mt-5"
      >
        {/* Time and details */}
        <div className=" h-full lg:h-[50%] w-full bg-[#393A5A] mb-[2%] rounded-2xl p-5 relative">
          <div className=" h-full w-[calc(100%-20px)] absolute">
            <div className="bg-[#E9E9E9] h-7 lg:h-10 w-[calc(100%-20px)] rounded-full animate-pulse"></div>
            <div className="w-full h-full lg:h-[80%] py-3">
              <div id="cloudiness" className="flex flex-col gap-0">
                <div className="flex items-center">
                  <img
                    className="h-5 lg:h-7"
                    src={cloudiness}
                    alt="cloudiness"
                  />
                  <h1 className="pl-2 text-sm lg:text-base font-poppins font-normal text-[#e9e9e99f]">
                    Cloudiness
                  </h1>
                </div>
                <div className="rounded-full animate-pulse h-3 w-14 lg:h-8 lg:w-20 ml-8 lg:ml-10 bg-[#E9E9E9] font-black "></div>
              </div>

              <div id="sunrise" className="flex flex-col pt-2">
                <div className="flex items-center">
                  <img className="h-5 lg:h-7" src={sunrise} alt="sunrise" />
                  <h1 className="pl-2 text-sm font-poppins lg:text-base font-normal text-[#e9e9e99f]">
                    Sunrise
                  </h1>
                </div>
                <div className="rounded-full animate-pulse h-3 w-14 lg:h-8 lg:w-20 ml-8 lg:ml-10 bg-[#E9E9E9] font-black "></div>
              </div>

              <div id="sunset" className="flex flex-col pt-2">
                <div className="flex items-center">
                  <img className="h-5 lg:h-7" src={sunset} alt="sunset" />
                  <h1 className="pl-2 text-sm font-poppins lg:text-base font-normal text-[#e9e9e99f]">
                    Sunset
                  </h1>
                </div>
                <div className="rounded-full animate-pulse h-3 w-14 lg:h-8 lg:w-20 ml-8 lg:ml-10 bg-[#E9E9E9] font-black "></div>
              </div>
            </div>
          </div>
        </div>

        {/* Air Pollution */}
        <div className="h-fit lg:h-[50%] w-full bg-[#393A5A] rounded-2xl p-5 lg:mt-0 mt-5 ">
          <h1 className="text-sm font-poppins font-bold text-[#E9E9E9]">
            AIR POLLUTION
          </h1>
          <div className="h-fit w-full my-3 text-sm lg:text-sm font-poppins">
            <section
              id="left"
              className="w-50% h-full text-[#E9E9E9] space-y-3"
            >
              <div className="flex space-x-6">
                <span className="text-sm lg:text-[15px] font-poppins font-normal text-[#e9e9e99f]">CO :</span>{" "}
                <div className=" w-20 rounded-full animate-pulse  bg-[#E9E9E9]">CO :</div>
              </div>
              <div className="flex space-x-6">
                <span className="text-sm lg:text-[15px] font-poppins font-normal text-[#e9e9e99f]">NO :</span>{" "}
                <div className=" w-20 rounded-full animate-pulse  bg-[#E9E9E9]">CO :</div>
              </div>
              <div className="flex space-x-[18px]">
                <span className="text-sm lg:text-[15px] font-poppins font-normal text-[#e9e9e99f]">
                  NO<sub>2</sub> :
                </span>
                <div className=" w-20 rounded-full animate-pulse  bg-[#E9E9E9]">CO :</div>
              </div>
              <div className="flex space-x-7">
                <span className="text-sm lg:text-[15px] font-poppins font-normal text-[#e9e9e99f]">
                  O<sub>3</sub> :
                </span>
                <div className=" w-20 rounded-full animate-pulse  bg-[#E9E9E9]">CO :</div>
              </div>

              <div className="flex space-x-[18px]">
                <span className="text-sm lg:text-[15px] font-poppins font-normal text-[#e9e9e99f]">
                  SO<sub>2</sub> :
                </span>{" "}
                <div className=" w-20 rounded-full animate-pulse  bg-[#E9E9E9]">CO :</div>
              </div>
              <div className="flex space-x-[10px]">
                <span className="text-sm lg:text-[15px] font-poppins font-normal text-[#e9e9e99f]">
                  PM<sub>10</sub> :
                </span>{" "}
                <div className=" w-20 rounded-full animate-pulse  bg-[#E9E9E9]">CO :</div>
              </div>
              <div className="flex space-x-2">
                <span className="text-sm lg:text-[15px] font-poppins font-normal text-[#e9e9e99f]">
                  PM<sub>2.5</sub> :
                </span>
                <div className=" w-20 rounded-full animate-pulse  bg-[#E9E9E9]">CO :</div>
              </div>
              <div className="flex space-x-[18px]">
                <span className="text-sm lg:text-[15px] font-poppins font-normal text-[#e9e9e99f]">
                  NH<sub>3</sub> :
                </span>
                <div className=" w-20 rounded-full animate-pulse  bg-[#E9E9E9]">CO :</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Shimmer;
