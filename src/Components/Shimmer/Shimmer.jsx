import React from "react";

const Shimmer = () => {
    return (
      <div className="w-95 py-2 px-4 animate-pulse">
        <div className="relative bg-gray-300 h-64 w-full overflow-hidden rounded-md">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </div>
      </div>
    );
  };

export default Shimmer;