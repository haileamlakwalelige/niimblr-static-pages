import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Blog from "./pages/Blog/blog";
import BlogDetail from "./pages/Blog/blog_detail";

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
            <Route path="/blog_detail" element={<BlogDetail />} />
          </Routes>
          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    </div>
  );
}
