import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import BlogPage from "./Components/BlogPage/BlogPage";
import Footer from "./Components/Footer/Footer";
import Bloc from "./Components/Bloc/Bloc";
import ContactPage from "./Components/Contact-page/ConactPage";
import TechnologyPage from "./Components/TechnoPage/TechnologyPage";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeWithAll />} />
            <Route path="/about" element={<BlogPage />} />
            <Route path="/blog" element={<Bloc />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

const HomeWithAll = () => {
  return (
    <div>
      <Home />
      <BlogPage />
      <Bloc />
      <ContactPage />
    </div>
  );
};

export default App;
