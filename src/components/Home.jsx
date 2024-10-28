import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";



const Home = () => {
  return (
    <div className="w-screen flex flex-col lg:flex-row">
        <Navbar />
        <Outlet/>
    </div>
  );
};

export default Home;
