import React from "react";

const Filter = (props) => {
   let filterData=props.filterData;
   let category=props.category;
   let setCategory=props.setCategory;

   function filterHandler(title){
       setCategory(title);    
   }
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {filterData.map((data) => {
        return (
          <button 
            key={data.id}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
             ${category ===  data.title ? "bg-opacity-500 border-white ":"bg-opacity-50 border-tarnsparent"}
            `}
            onClick={() => filterHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
