import { useState } from "react";
import "./../styles/navbar.scss";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Portfólio</div>
      <ul className={active ? "nav-links active" : "nav-links"}>
        <li><a href="#about">Sobre Mim</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <div className="hamburger" onClick={() => setActive(!active)}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
}
