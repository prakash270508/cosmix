import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/home/Navbar";
import Search from "./pages/home/Search";
// import CaseDetails from "./pages/home/pages/home/Casedetails";
import Service2 from "./pages/home/Service2";
import Features from "./pages/home/Features";
import Portfolio from "./pages/home/Portfolio";
import Pricing from "./pages/home/Pricing";
import Team from "./pages/home/Team";
import Blog from "./pages/home/Blog";
import ContactUs from "./pages/home/ContactUs";
import About3 from "./pages/home/About3";
import CaseDetails from "./pages/home/Casedetails";
import ServiceComponent from "./pages/home/ServiceComponent";

function App() {
  return (
    <div>
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<CaseDetails />} />
        <Route exact path="/about" element={<About3 />} />
        <Route exact path="/service" element={<Service2 />} />
        <Route exact path="/service/:laws" element={<ServiceComponent />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact-us" element={<ContactUs />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
