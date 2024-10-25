
import Forecast from './Forecast'
import Navbar from './Navbar'

const Weather = () => {
  return (
    <div className='flex flex-col lg:flex-row h-fit w-screen bg-[#22222E]'>
    <Navbar/>
    <Forecast/>
    </div>
  )
}

export default Weather
