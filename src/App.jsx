import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Genesis from "./pages/Genesis"; // Import the new page
import Intelligence from "./pages/Intelligence"; // We will create this next
import Collaborate from "./pages/Collaborate";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="bg-[#050707] text-[#F5F7F7] min-h-screen font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genesis" element={<Genesis />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/collaborate" element={<Collaborate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}