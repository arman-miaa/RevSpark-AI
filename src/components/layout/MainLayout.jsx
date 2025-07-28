import { Outlet } from "react-router"
import Navbar from "../shared/Navbar"
import Footer from "../shared/Footer"

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};


export default MainLayout