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
    href: "https://github.com/lagux-coding",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/lagux",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100040225846442",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/laguxl_",
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
              href="mailto:bytrungnam@gmail.com"
              target="_blank"
              label="Let's Connect"
              icon={<FaChevronRight />}
              classes={`max-w-max`}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      aria-label="sitemap"
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
                      rel="noopener noreferrer"
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
          <a href="#" className="headline-1 mb-2">
            <p className="text-xl">Nguyen Hien Trung Nam</p>
          </a>

          <p className="text-sm text-zinc-500">
            &copy; 2026 <span className="text-zinc-200">Nguyen Hien Trung Nam</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
