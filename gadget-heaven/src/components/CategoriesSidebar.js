import React from "react";

function CategoriesSidebar({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg w-48">
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => onSelectCategory("All")}
            className={`w-full text-left px-4 py-2 rounded-lg ${
              selectedCategory === "All" ? "bg-purple-500 text-white" : "bg-white text-gray-700"
            }`}
          >
            All Products
          </button>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onSelectCategory(category)}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                selectedCategory === category ? "bg-purple-500 text-white" : "bg-white text-gray-700"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesSidebar;
