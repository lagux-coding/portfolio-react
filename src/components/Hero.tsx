import { FaArrowCircleDown } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { ButtonOutline, ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box h-9 w-9 rounded-lg">
              <img
                src="/images/avatar-1.webp"
                width={40}
                height={40}
                alt="Nam H.T. Nguyen portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-sm tracking-wide text-zinc-400">
              <span className="relative h-2 w-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1">Building Thoughtful and Scalable Web application</h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon={<MdDownload />} />
            <ButtonOutline href="#about" label="Scroll Down" icon={<FaArrowCircleDown />} />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="ml-auto w-full max-w-[480px] overflow-hidden rounded-[60px] bg-gradient-to-t from-violet-700 via-violet-400/40 via-25% to-65%">
            <img
              src="/images/hero-banner-2.webp"
              width={656}
              height={800}
              alt="Nam H.T. Nguyen"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
