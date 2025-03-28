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
  const scrollingRef = useRef(false);

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

  const handleLinkClick = (index: number, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default link navigation

    // Set scrolling flag to prevent scroll event from overriding the click
    scrollingRef.current = true;
    setActiveIndex(index);
    localStorage.setItem("activeIndex", String(index));

    // Get the target section ID from the href attribute
    const targetId = navItems[index].link.substring(1); // Remove the # character
    const targetSection = document.getElementById(targetId);

    // Update URL hash without triggering native scroll
    window.history.pushState(null, "", navItems[index].link);

    // Scroll to the section immediately
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });

      // Reset scrolling flag after animation completes
      setTimeout(() => {
        scrollingRef.current = false;
      }, 1000);
    }
  };

  // Add scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      // Skip if we're currently handling a click-initiated scroll
      if (scrollingRef.current) return;

      // Find which section is most visible in viewport
      const sectionPositions = navItems.map((item) => {
        const sectionId = item.link.substring(1);
        const section = document.getElementById(sectionId);
        if (!section) return { index: -1, visibility: 0 };

        const rect = section.getBoundingClientRect();
        const total = rect.height;
        const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        // Calculate how much of the section is visible as a percentage
        const visibility = total > 0 ? visible / total : 0;

        return {
          index: navItems.findIndex((nav) => nav.link === `#${sectionId}`),
          visibility: Math.max(0, visibility),
        };
      });

      // Find the section with highest visibility
      const mostVisible = sectionPositions.reduce(
        (prev, curr) => (curr.visibility > prev.visibility ? curr : prev),
        { index: 0, visibility: 0 },
      );

      // Only update if we have a valid section with decent visibility
      if (mostVisible.index !== -1 && mostVisible.visibility > 0.2) {
        setActiveIndex(mostVisible.index);
        localStorage.setItem("activeIndex", String(mostVisible.index));
        window.history.replaceState(null, "", navItems[mostVisible.index].link);
      }
    };

    // Throttle scroll events for performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", scrollListener);

    // Clean up
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []); // Empty dependency array to run once on mount

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
          onClick={(e) => handleLinkClick(index, e)}
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
