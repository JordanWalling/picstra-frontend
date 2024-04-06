import "../navbar/Navbar.scss";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Picstra</h1>
      </div>
      <div className="links">
        <Link to="/create-post">Create Post</Link>
      </div>
      <div className="hamburger">
        <RxHamburgerMenu />
      </div>
    </div>
  );
}
export default Navbar;
