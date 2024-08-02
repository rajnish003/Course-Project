
import React from 'react';
import { FcLike , FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
  let course=props.course;
  let likedCourses=props.likedCourses;
  let setLikedCourses=props.setLikedCourses;
  const clickHandler=()=>{
     if(likedCourses.includes(course.id)){
      setLikedCourses((prev)=>prev.filter((cid)=> cid !== course.id));
      toast.warning("Liked removed");
     }
     else{
         if(likedCourses.length === 0){
          setLikedCourses([course.id]);
         }
         else{
          setLikedCourses((prev)=>[...prev,course.id]);
         }
         toast.success("Liked Successfully");
     }
     
  };

  
  return (
    <div className="w-[300px] h-50 rounded overflow-hidden shadow-lg p-4 m-4 bg-white">
      <div className="relative">
        <img className=" relative w-screen h-48 " src={course.image.url} alt={course.title} />
        <div className="absolute top-2 right-2">
          <button onClick={clickHandler} className="bg-white rounded-full p-1 shadow-md hover:bg-gray-100">
            {
              likedCourses.includes(course.id) ?

              (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />) 
            }
          </button>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-lg font-bold">{course.title}</p>
        <p className="text-gray-700 mt-2">
              {
                course.description.length > 100 ? (course.description.substr(0,100))+ "..." 
                :(course.description)
              }  
        </p>
      </div>
    </div>
  );
}

export default Card;
