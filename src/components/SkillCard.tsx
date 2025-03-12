import { SkillCardProps } from "@/types/types";

const SkillCard = ({ imgSrc, label, desc, classes }: SkillCardProps) => {
  return (
    <div
      className={`group flex items-center gap-3 rounded-2xl p-3 ring-2 ring-zinc-50/10 transition-colors ring-inset hover:bg-zinc-800 ${classes}`}
    >
      <figure className="h-12 w-12 overflow-hidden rounded-lg bg-zinc-700/50 p-2 transition-colors group-hover:bg-zinc-900">
        <img src={imgSrc} width={32} height={32} alt={label} />
      </figure>

      <div>
        <h3>{label}</h3>
        <p className="text-sm text-zinc-400">{desc}</p>
      </div>
    </div>
  );
};

export default SkillCard;
