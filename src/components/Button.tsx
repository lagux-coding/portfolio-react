import { ButtonProps } from "@/types/types";

const ButtonPrimary = ({ href, target, label, icon, classes }: ButtonProps) => {
  return href ? (
    <a href={href} target={target} className={`btn btn-primary ${classes}`}>
      {label}
      {icon && <span className="icon">{icon}</span>}
    </a>
  ) : (
    <button className={`btn btn-primary ${classes}`}>
      {label}
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
};

const ButtonOutline = ({ href, target, label, icon, classes }: ButtonProps) => {
  return href ? (
    <a href={href} target={target} className={`btn btn-outline ${classes}`}>
      {label}
      {icon && <span className="icon">{icon}</span>}
    </a>
  ) : (
    <button className={`btn btn-outline ${classes}`}>
      {label}
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
};

export { ButtonPrimary, ButtonOutline };
