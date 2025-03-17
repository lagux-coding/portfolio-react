import { MdArrowOutward } from "react-icons/md";
import { ProjectCardProps } from "@/types/types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }: ProjectCardProps) => {
  return (
    <div
      className={`relative rounded-2xl bg-zinc-800 p-4 ring-1 ring-zinc-50/5 transition-colors ring-inset hover:bg-zinc-700/50 active:bg-zinc-700/60 ${classes}`}
    >
      <figure className="img-box mb-4 aspect-square rounded-lg">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="grid h-8 items-center rounded-lg bg-zinc-50/5 px-3 text-sm text-zinc-400"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* icon */}
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-violet-400 text-zinc-950">
          <span className="text-lg">
            <MdArrowOutward />
          </span>
        </div>

        <a
          href={projectLink}
          aria-label="project-link"
          target="_blank"
          className="absolute inset-0"
        ></a>
      </div>
    </div>
  );
};

export default ProjectCard;
