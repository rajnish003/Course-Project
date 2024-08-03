import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import { apiUrl, filterData } from "./data";
import { toast } from 'react-toastify';
import Cards from './components/Cards';
import  Spinner from './components/Spinner';

const App = () => {
  const [courses, setCourses] = useState([]);  //32 min
  const [loading,setLoading] =useState(true);
  const [category,setCategory]=useState(filterData[0].title)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
        // console.log(output);
      } catch (error) {
        toast.error("Something went wrong");
      }finally{
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Filter filterData={filterData}
       category={category}
       setCategory={setCategory}
      />
      <div className="flex-grow">
        {
          loading ? (<Spinner/>):(<Cards courses={courses} category={category}/>)
        }
      </div>
    </div>
  );
}

export default App;
