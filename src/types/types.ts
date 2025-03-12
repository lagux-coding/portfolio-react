export interface ButtonProps {
  label: string;
  href?: string;
  target?: string;
  icon?: string | React.ReactNode;
  classes?: string;
}

export interface ProjectCardProps {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink?: string;
  classes?: string;
}

export interface SkillCardProps {
  imgSrc: string;
  label: string;
  desc: string;
  classes?: string;
}

export interface FilterButtonProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export interface NavbarProps {
  navOpen: boolean;
}
