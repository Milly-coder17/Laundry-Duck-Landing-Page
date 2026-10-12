import { useState } from "react"
import laundryDuckLogo from "../assets/Laundry Duck Logo.png"
import "../styles/Header.css"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="navbar">
        <a href="/" className="logo">
          <img
            src={laundryDuckLogo}
            alt="LaundryDuck Logo"
            className="logoImage"
          />
          <span className="logoText">LaundryDuck</span>
        </a>

        <nav className="navLinks">
          <a href="#services">Services</a>
          <a href="#howItWorks">How It Works</a>
          <a href="#about">About Us</a>
        </nav>

        <div className="headerActions">
          <a href="/login" className="loginBtn">Log In</a>
          <a href="/register" className="signupBtn">Get Started</a>
        </div>

        <button
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

    <aside className={`mobileSidebar ${menuOpen ? "sidebarOpen" : ""}`}>
    <div className="sidebarHeader">
        <button
        className="sidebarClose"
        onClick={closeMenu}
        aria-label="Close menu"
        >
        &times;
        </button>
    </div>

    <nav className="sidebarLinks">
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#howItWorks" onClick={closeMenu}>How It Works</a>
        <a href="#about" onClick={closeMenu}>About Us</a>
    </nav>

    <div className="sidebarActions">
        <a href="/login" onClick={closeMenu}>Log In</a>
    </div>
    </aside>
    </>
  )
}

export default Header