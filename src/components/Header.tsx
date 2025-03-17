import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-40 flex h-20 w-full items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 md:grid md:grid-cols-[1fr_3fr_1fr] md:px-6">
        <h1>
          <a href="/" className="logo" aria-label="logo">
            <img src="/images/logo.svg" alt="logo" width={40} height={40} />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button className="menu-btn" onClick={() => setNavOpen((prev) => !prev)}>
            <span className="material-symbols-rounded">
              {navOpen ? <IoMdClose /> : <IoIosMenu />}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a href="#contact" className="btn btn-secondary !hidden md:!flex">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
