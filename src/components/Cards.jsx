import React from 'react';
import { useState } from "react";
import Card from './Card';

const Cards = ({ courses }) => {
  const [likedCourses,setLikedCourses]=useState([])

  const getCourses = () => {
    let allCourses = [];
    if (courses) {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
    }
    return allCourses;
  }

  return (
    <div className="container mx-auto p-4">
      {!courses ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-700 text-lg">No data found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {getCourses().map((course, index) => {
            return <Card key={index} course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Cards;
