import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";
import Writings from "./pages/Writings";

import './App.css'
import './index.css'
import Footer from "./Components/footer.jsx";
import BackgroundGrid from "./Components/Background Grid/backgroundGrid.jsx";


export default function App() {
  return (
      <BrowserRouter>
        <Navbar />
          <BackgroundGrid/>
          {/* <Aside /> */}

        <main className=" ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/writings" element={<Writings />} />
          </Routes>
        </main>
          <Footer/>
      </BrowserRouter>
  );
}
