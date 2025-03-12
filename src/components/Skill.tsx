import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FilterButton from "./FilterButton";
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/skills/java.svg",
    label: "Java",
    desc: "Programming Language",
    category: "Languages",
  },
  {
    imgSrc: "/images/skills/csharp.svg",
    label: "C#",
    desc: "Programming Language",
    category: "Languages",
  },
  {
    imgSrc: "/images/skills/c.svg",
    label: "C",
    desc: "Programming Language",
    category: "Languages",
  },
  {
    imgSrc: "/images/skills/js.svg",
    label: "Javascript",
    desc: "Programming Language",
    category: "Languages",
  },
  {
    imgSrc: "/images/skills/ts.svg",
    label: "Typescript",
    desc: "Programming Language",
    category: "Languages",
  },
  {
    imgSrc: "/images/skills/spring-boot.svg",
    label: "Spring Boot",
    desc: "Backend & Frameworks",
    category: "Backend",
  },
  {
    imgSrc: "/images/skills/dotnet.svg",
    label: ".NET",
    desc: "Backend & Frameworks",
    category: "Backend",
  },
  {
    imgSrc: "/images/skills/html.svg",
    label: "HTML",
    desc: "Frontend & Tools",
    category: "Frontend",
  },
  {
    imgSrc: "/images/skills/css.svg",
    label: "CSS",
    desc: "Frontend & Tools",
    category: "Frontend",
  },
  {
    imgSrc: "/images/skills/react.svg",
    label: "React.js",
    desc: "Frontend & Tools",
    category: "Frontend",
  },
  {
    imgSrc: "/images/skills/vite.svg",
    label: "Vite",
    desc: "Frontend & Tools",
    category: "Frontend",
  },
  {
    imgSrc: "/images/skills/tailwind.svg",
    label: "TailwindCSS",
    desc: "Frontend & Tools",
    category: "Frontend",
  },
  {
    imgSrc: "/images/skills/maven.svg",
    label: "Maven",
    desc: "Build & Package Managers",
    category: "Others",
  },
  {
    imgSrc: "/images/skills/npm.svg",
    label: "npm",
    desc: "Build & Package Managers",
    category: "Others",
  },
  {
    imgSrc: "/images/skills/mysql.svg",
    label: "MySQL",
    desc: "Database",
    category: "Databases",
  },
  {
    imgSrc: "/images/skills/mssql.svg",
    label: "SQL Server",
    desc: "Database",
    category: "Databases",
  },
  {
    imgSrc: "/images/skills/aws.svg",
    label: "AWS",
    desc: "DevOps & Cloud",
    category: "Others",
  },
  {
    imgSrc: "/images/skills/jenkins.svg",
    label: "Jenkins",
    desc: "DevOps & Cloud",
    category: "Others",
  },
  {
    imgSrc: "/images/skills/docker.svg",
    label: "Docker",
    desc: "DevOps & Cloud",
    category: "Others",
  },
  {
    imgSrc: "/images/skills/github.svg",
    label: "Github",
    desc: "Version Control",
    category: "Others",
  },
];

const Skill = () => {
  const ref = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillItem
      : skillItem.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skill" className="section">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>
        <p className="mt-3 mb-8 max-w-[50ch] text-zinc-400">
          Explore the tools and technologies that power my creations—building high-performance,
          scalable, and cleanly crafted websites & applications.
        </p>

        <div className="mb-8">
          <FilterButton activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3">
          {filteredSkills.map(({ imgSrc, label, desc }, key) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
