import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import HrList from "./Pages/HrList";
import ConsultingPage from "./Pages/ConsultingPage";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/team" element={<HrList />} />
          <Route path="/consulting" element={<ConsultingPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
