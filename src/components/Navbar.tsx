import { useEffect, useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { NavbarProps } from "@/types/types";

const Navbar = ({ navOpen }: NavbarProps) => {
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const activeBox = useRef<HTMLDivElement | null>(null);
  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Skill", link: "#skill" },
    { label: "Work", link: "#work" },
    { label: "Contact", link: "#contact" },
  ];

  const getInitialIndex = () => {
    const savedIndex = localStorage.getItem("activeIndex");
    const currentHash = window.location.hash;
    const hashIndex = navItems.findIndex((item) => item.link === currentHash);

    return hashIndex !== -1 ? hashIndex : savedIndex ? Number(savedIndex) : 0;
  };

  const [activeIndex, setActiveIndex] = useState(getInitialIndex);

  const updateActiveBox = (index: number) => {
    const link = navLinksRef.current[index];
    if (!link || !activeBox.current) return;

    activeBox.current.style.top = link.offsetTop + "px";
    activeBox.current.style.left = link.offsetLeft + "px";
    activeBox.current.style.width = link.offsetWidth + "px";
    activeBox.current.style.height = link.offsetHeight + "px";
  };

  useLayoutEffect(() => {
    updateActiveBox(activeIndex);
  }, [activeIndex]);

  const handleLinkClick = (index: number) => {
    setActiveIndex(index);
    localStorage.setItem("activeIndex", String(index));
  };

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link }, index: number) => (
        <a
          href={link}
          className={`nav-link ${index === activeIndex ? "active" : ""}`}
          key={index}
          ref={(el) => {
            navLinksRef.current[index] = el;
          }}
          onClick={() => handleLinkClick(index)}
        >
          {label}
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
