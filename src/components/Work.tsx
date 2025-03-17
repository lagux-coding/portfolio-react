import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/work/prestige-koi-auction.webp",
    title: "Prestige Koi Auction",
    tags: ["API", "Frontend", "Backend", "JWT", "Development"],
    projectLink: "https://github.com/lagux-coding/prestige-koi-auction/",
  },
  {
    imgSrc: "/images/work/portfolio-react.webp",
    title: "Portfolio",
    tags: ["Frontend", "Design", "Development"],
    projectLink: "https://github.com/lagux-coding/portfolio-react.git",
  },
];

const Work = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <motion.section ref={ref} style={{ opacity, scale }} id="work" className="section">
      <div className="container">
        <h2 className="headline-2">My portfolio highlights</h2>

        <div className="mt-4 grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-x-4 gap-y-5">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
