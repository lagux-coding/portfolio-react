import { Button } from "./ui/button";

const categories = ["All", "Languages", "Frontend", "Backend", "Databases", "Others"];

const FilterButton = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((category, index) => (
        <Button
          key={index}
          variant="outline"
          className={activeCategory === category ? "bg-white text-black" : ""}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default FilterButton;
