import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <motion.section ref={ref} style={{ opacity, scale }} id="about" className="section">
      <div className="container">
        <div className="rounded-2xl bg-zinc-800/50 p-7 md:p-12">
          <p className="mb-6 text-zinc-300 md:max-w-[70ch] md:text-xl">
            Welcome! I&apos;m Nam, a Software Engineering graduate from FPT University HCM. I am a
            builder at heart, driven by the thrill of turning complex logic into clean, scalable
            systems.
          </p>

          <p className="mb-6 leading-7 text-zinc-300 md:max-w-[70ch]">
            I am currently open to new opportunities. While my roots are in robust Backend
            Development (ASP.NET Core, PostgreSQL, Redis), my core focus has evolved towards Cloud
            Architecture and DevOps (Docker, Nginx, AWS EC2, CI/CD). I also adapt to modern frontend
            stacks like React &amp; Next.js to deliver high-performance solutions.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-medium text-zinc-300 md:max-w-[60ch] md:text-xl">
              Always building, always learning. Let’s ship something amazing! 🚀
            </p>

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:h-[40px] md:w-[40px]"
            />
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-zinc-800/50 p-8">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Random Quote</h3>
          <blockquote className="mt-6 border-l-2 pl-6 text-zinc-400 italic md:text-xl">
            "Code is like humor. When you have to explain it, it’s bad."
          </blockquote>
          <p className="mt-3 text-right text-lg font-semibold text-white">– Cory House</p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
