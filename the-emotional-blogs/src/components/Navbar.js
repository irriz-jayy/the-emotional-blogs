import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-img">
        <img
          src="https://raw.githubusercontent.com/irriz-jayy/images/main/logo.png"
          height="70"
          alt="logo image"
        />
        <div className="navbar-nav">
          <Link to="#">Home</Link>
          <Link to="/new-blog">New</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
