import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/contact" element={<ContactUs/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
