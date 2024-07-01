import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

export default function App() {
  return (
   <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
    <Navbar />
    {/* Your App Here */}
    <main className="min-h-screen"></main>
    <Footer />
   </div>
  )
}