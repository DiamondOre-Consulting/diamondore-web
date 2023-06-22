import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import HrList from "./Pages/HrList";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/contact" element={<ContactUs/>} />
          <Route exact path="/team" element={<HrList />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
