import { useEffect, useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const navLinksRef = useRef([]); // Lưu ref cho từng link
  const activeBox = useRef(null);
  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Skill", link: "#skill" },
    { label: "Work", link: "#work" },
    { label: "Contact", link: "#contact" },
  ];

  // Lấy index từ localStorage hoặc từ URL hash
  const getInitialIndex = () => {
    const savedIndex = localStorage.getItem("activeIndex");
    const currentHash = window.location.hash;
    const hashIndex = navItems.findIndex((item) => item.link === currentHash);

    return hashIndex !== -1 ? hashIndex : savedIndex ? Number(savedIndex) : 0;
  };

  const [activeIndex, setActiveIndex] = useState(getInitialIndex);

  const updateActiveBox = (index) => {
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

  const handleLinkClick = (index) => {
    setActiveIndex(index);
    localStorage.setItem("activeIndex", index);
  };

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link }, index) => (
        <a
          href={link}
          className={`nav-link ${index === activeIndex ? "active" : ""}`}
          key={index}
          ref={(el) => (navLinksRef.current[index] = el)}
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
