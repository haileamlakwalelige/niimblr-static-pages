import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Blog from "./pages/Blog/blog";
import BlogDetail from "./pages/Blog/blog_detail";

import Home from "./pages/Landing_page/landing_page";
import Pricing from "./pages/Pricing/Pricing";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Your App Here */}
      <BrowserRouter>
        <nav>
          <Navbar />
        </nav>

        <div className="pt-32">
          <Routes>
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            
          </Routes>
          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    </div>
  );
}
