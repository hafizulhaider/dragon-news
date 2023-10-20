import { useEffect, useState } from "react";
// import categories from "../../../public/categories.json";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="font-semibold text-xl space-y-3 mb-5">All Categories</h2>
      {
      
      categories.map((category) => (
        <NavLink
          className="block p-5"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideNav;
