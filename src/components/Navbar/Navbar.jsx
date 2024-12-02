import hors from "../../assets/hors.jpg";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="max_padd_container">
      <div>
        <h1>Astro</h1>
      </div>
      <div className="nav-center uppercase bold-22 text-white bg-secondary px-3 rounded-md tracking-widest line-clamp-1 max-xs:bold-18 max-xs:py-2 max-xs:px-1">
        Admin Panel
      </div>
      <div className="nav-right">
        <img src={hors} alt="" className="h-12 w-12 rounded-full" />
      </div>
    </nav>
  );
};

export default Navbar;
