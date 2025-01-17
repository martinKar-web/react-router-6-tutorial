import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* make active link using inline css */}
      {/*<NavLink
        to="/"
        className={({isActive}) =>
          isActive ? "link active" : "link"
        }
      >
        Home
      </NavLink>*/}

      {/* make active link using inline className attribute */}

      <NavLink
        to="/"
        className={({isActive}) =>
          isActive ? "link active" : "link"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({isActive}) =>
          isActive ? "link active" : "link"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({isActive}) =>
          isActive ? "link active" : "link"
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/login"
        className={({isActive}) =>
          isActive ? "link active" : "link"
        }
      >
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
