import React from "react";

const Filter = ({ filterData }) => {
    
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {filterData.map((data) => {
        return (
          <button 
            key={data.id}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
