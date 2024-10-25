import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./components/StartPage";
import Home from "./components/Home";
import About from "./components/About";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/weather" element={<Weather />}/>
          <Route path="/weather" element={<Home />}>
          
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
