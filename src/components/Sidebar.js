import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTachometerAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css'; 

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <nav className={`modern-sidebar ${open ? "open" : "collapsed"}`}>
        <div className="mb-4 w-100 d-flex align-items-center px-2" style={{height: "56px"}}>
          <button
            className="btn btn-dark me-2"
            style={{ zIndex: 1050, padding: "2px 8px", fontSize: "1.1rem" }}
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle sidebar"
            type="button"
          >
            <FaBars />
          </button>
          {open && <span className="fw-bold fs-5" style={{letterSpacing: "1px"}}>Menu</span>}
        </div>
        <button
          className={
            "d-flex align-items-center w-100 mb-2 px-2 py-2 rounded border-0 bg-transparent " +
            (location.pathname === "/" ? "bg-secondary text-white" : "text-white")
          }
          style={{outline: "none", cursor: "pointer"}}
          onClick={() => navigate("/")}
        >
          <FaTachometerAlt className="me-2" />
          {open && <span className="fw-semibold">Dashboard</span>}
        </button>
        {/* ...add more sidebar items here as needed... */}
      </nav>
      {/* Add left margin to page content when sidebar is open */}
      <div style={{ marginLeft: open ? "220px" : "60px", transition: "margin-left 0.3s" }} />
    </>
  );
};

export default Sidebar;
