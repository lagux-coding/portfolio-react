import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const aboutItems = [
  {
    label: "Project done",
    number: 45,
  },
  {
    label: "Years of experience",
    number: 10,
  },
];

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.5", "end 1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <motion.section ref={ref} style={{ opacity, scale }} id="about" className="section">
      <div className="container">
        <div className="rounded-2xl bg-zinc-800/50 p-7 md:p-12">
          <p className="mb-8 text-zinc-300 md:max-w-[60ch] md:text-xl">
            Welcome! I&apos;m Nam, a third year Software Engineering student at FPT University
            Campus HCM. A passionate developer who thrives on building, innovating, and continuously
            learning.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {/* {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="font-semibold text-violet-400 md:text-3xl">+</span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))} */}
            <p className="leading-7 text-zinc-300 md:max-w-[70ch] [&:not(:first-child)]:mt-6">
              - Starting with backend development, I now explore everything from web development to
              software engineering. With <strong>Java, Spring Boot, and AWS EC2</strong> as my
              foundation, I'm expanding into <strong>TypeScript, React, and Next.js</strong> to push
              my limits.
            </p>

            <p className="text-zinc-300 md:max-w-[60ch] md:text-xl">
              Let’s build something amazing together! 🚀
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

        <div className="mt-6 rounded-2xl bg-zinc-800/50 md:p-8">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Random Quote</h4>
          <blockquote className="mt-6 border-l-2 pl-6 text-zinc-400 italic md:text-xl">
            "Coding is not just code, that is a live thing to serve humans!"
          </blockquote>
          <p className="mt-3 text-right text-lg font-semibold text-white">- Masaaki Imai</p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
