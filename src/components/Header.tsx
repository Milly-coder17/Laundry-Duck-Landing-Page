import { useState } from "react"
import { Link } from "react-router-dom"
import laundryDuckLogo from "../assets/Laundry Duck Logo.svg"
import "../styles/Header.css"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            src={laundryDuckLogo}
            alt="LaundryDuck Logo"
            className="logoImage"
          />
          <span className="logoText">LaundryDuck</span>
        </Link>

        <nav className="navLinks">
          <a href="#about" onClick={closeMenu}>
            About Us
          </a>
          <a href="#howItWorks" onClick={closeMenu}>
            How It Works
          </a>
          <a href="#registration" onClick={closeMenu}>
            For Riders & Shops
          </a>
          <a href="#faqs" onClick={closeMenu}>
            FAQs
          </a>
        </nav>

        <div className="headerActions">
          <a
            href="https://laundryduck-frontend.onrender.com/"
            className="signupBtn"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          className="menuToggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div
        className={`sidebarOverlay ${menuOpen ? "overlayVisible" : ""}`}
        onClick={closeMenu}
      ></div>

      <aside
        className={`mobileSidebar ${menuOpen ? "sidebarOpen" : ""}`}
      >
        <div className="sidebarHeader">
          <button
            type="button"
            className="sidebarClose"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <nav className="sidebarNavLinks">
          <a href="#about" onClick={closeMenu}>
            About Us
          </a>
          <a href="#howItWorks" onClick={closeMenu}>
            How It Works
          </a>
          <a href="#registration" onClick={closeMenu}>
            For Riders & Shops
          </a>
          <a href="#faqs" onClick={closeMenu}>
            FAQs
          </a>
        </nav>
      </aside>
    </>
  )
}

export default Header