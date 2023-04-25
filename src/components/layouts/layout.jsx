import { Outlet } from "react-router-dom";
import Navbar from "../partials/navbar";
import Footer from "../partials/footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="mb-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
