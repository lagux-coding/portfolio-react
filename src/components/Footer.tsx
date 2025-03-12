import { FaChevronRight } from "react-icons/fa6";
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skill",
    href: "#skill",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://www.github.com/lagux-coding",
  },
  {
    label: "LinkedIn",
    href: "/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/laguxl",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/codewithsadee",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          {/* Mail to */}
          <div className="mb-10 flex flex-col">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s build something amazing together! 🚀
            </h2>

            <ButtonPrimary
              href="mailto:namnguyen8644@gmail.com"
              target="_blank"
              label="Let's Connect"
              icon={<FaChevronRight />}
              classes={`max-w-max`}
            />
          </div>

          {/*  */}
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between pt-10">
          <a href="" className="mb-2">
            <img src="/images/logo.svg" width={40} height={40} alt="Logo" />
          </a>

          <p className="text-sm text-zinc-500">
            &copy; 2025 <span className="text-zinc-200">Nam H.T. Nguyen</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
