import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <Outlet />
    </div>
  );
}
export default MainLayout;
