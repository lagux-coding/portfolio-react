import { FaArrowCircleDown } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { ReactTyped } from "react-typed";
import { ButtonOutline, ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28">
      <div className="container">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box h-9 w-9 rounded-lg">
              <img
                src="/images/avatar.jpg"
                width={40}
                height={40}
                alt="Nguyen Hien Trung Nam portrait"
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

          <div className="flex flex-col text-2xl lg:mt-2">
            <p className="headline-4">Hello I'm</p>
            <h2 className="headline-1">Nguyen Hien Trung Nam</h2>
            <p className="headline-4">
              A passionate{" "}
              <ReactTyped
                strings={["Backend Developer", "Cloud & DevOps Explorer", "Full-stack Enthusiast"]}
                typeSpeed={100}
                backSpeed={50}
                loop
                cursorChar="|"
                showCursor={true}
              />
            </p>
            <p className="mt-3 mb-6 text-xl font-light lg:text-2xl lg:leading-tight">
              Exploring backend development with a focus on cloud architecture and scalability.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon={<MdDownload />} />
            <ButtonOutline href="#about" label="Scroll Down" icon={<FaArrowCircleDown />} />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="ml-auto w-full max-w-[480px] overflow-hidden rounded-[60px] bg-gradient-to-t from-violet-700 via-violet-400/40 via-25% to-65%">
            <img
              src="/images/hero-banner.jpg"
              width={656}
              height={800}
              alt="Nguyen Hien Trung Nam"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
