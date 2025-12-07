import React from "react";

const FilterBar = () => {
    return (
      <div className="md:w-full font-semibold border-l-2 py-5 px-3 md:px-6 dark:border-neutral-600 border-gray-400">
        <p className="text-base w-23 rounded-sm px-4 py-1.5 dark:bg-white dark:text-black bg-black text-white inline-block cursor-pointer hover:opacity-90 transition-opacity">
          + Filters
        </p>
      </div>
    );
  };
  
export default FilterBar;