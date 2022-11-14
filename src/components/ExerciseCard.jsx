import React from "react";
import { Link } from "react-router-dom";
const ExerciseCard = ({ exercise, index }) => {
  let str;
  const length = exercise.name.length;
  if (length > 29) {
    str = exercise.name.slice(0, 29);
    str = str.concat(`...`);
  } else {
    str = exercise.name;
  }

  return (
    <Link
      style={{ textDecoration: "none" }}
      className="exercise_card"
      to={`/exercise/${exercise.id}`}
    >
      <div className="flex flex-col px-4 py-8 gap-8 rounded-lg w-max h-max shadow-lg shadow-gray-500 box-border hover:shadow-gray-700 md:p-8 md:flex md:flex-col md:gap-4 md:w-2/5 md:rounded-lg md:box-border md:shadow-gray-500 md:hover:shadow-gray-600 sm:w-full sm:self-center sm:h-max">
        <div className="m-auto w-4/5 md:m-auto md:w-11/12 sm:text-sm">
          <img className="w-full md:w-full " src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        </div>
        <div className="flex justify-around text-base gap-8 md:text-sm">
          <span className="py-4 px-8 capitalize bg-rose-500 rounded-2xl text-white font-medium text-sm hover:text-rose-500 hover:bg-gray-100 shadow-gray-500 md:py-3 md:px-4 md:p-3.5 md:text-sm sm:py-2 sm:px-4 sm:text-sm sm:p-2.5">{exercise.bodyPart}</span>
          <span className="hover:bg-rose-500 hover:text-white text-rose-500 bg-gray-100 shadow-gray-500">{exercise.target}</span>
        </div>
        <h3 className="font-semibold  text-xl text-center text-black capitalize break-words">{str}</h3>
      </div>
    </Link>
  );
};




// const
export default ExerciseCard;