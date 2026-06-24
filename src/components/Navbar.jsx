import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import "../styles/navbar.css";

function Navbar() {

  const [menu, setMenu] = useState(false);

  return (
    <header className="header">

      <div className="container nav-container">

        <Link to="/" className="logo">
          <img
            src="/logo.png"
            alt=""
          />
        </Link>

        <nav className={menu ? "nav active" : "nav"}>

          <Link to="/">Home</Link>

          <Link to="/industries">
            Industries
          </Link>

          <Link to="/pentakuhl">
            Pentakuhl
          </Link>

          <button className="contact-btn">
            Contact Us
          </button>

        </nav>

        <div
          className="menu-btn"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <IoClose /> : <HiOutlineMenuAlt3 />}
        </div>

      </div>

    </header>
  );
}

export default Navbar;