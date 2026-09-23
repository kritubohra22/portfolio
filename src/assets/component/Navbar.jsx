import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <h2>Portfolio</h2>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
