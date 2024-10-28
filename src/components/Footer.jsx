
import cloud from "../assets/cloudy.png";

const Footer = () => {



    let date = new Date();
    let currentYear = date.getFullYear();
    console.log(currentYear);


  return (
    <>
      <footer className="w-full h-fit" >
        <div className="p-5">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex justify-center items-center ">
              <img className="h-10" src={cloud} alt="logo" />
              <h1 className="ml-5 font-poppins text-2xl font-bold text-[#E9E9E9]" >BreezeNow</h1>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; {currentYear}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
