import React from "react";
import { Link } from "react-router-dom";
const ExerciseCard = ({ exercise, index }) => {
  let str;
  const length = exercise.name.length;
  if (length > 20) {
    str = exercise.name.slice(0, 20);
    str = str.concat(`..`);
  } else {
    str = exercise.name;
  }

  return (
    <Link
      style={{ textDecoration: "none" }}
      className="exercise_card"
      to={`/exercise/${exercise.id}`}
    >
      <div className="m-8 p-4 flex flex-col w-80 h-96 gap-8 box-border rounded-lg shadow-lg shadow-gray-500 hover:bg-gray-600 break-words sm:w-4/5 sm:h-96 md:w-3/5 md:h-96">
        <div className=" m-auto w-3/4">
          <img className="w-full" src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        </div>
        <div className="flex justify-around text-base">
          <span className="rounded-md font-medium py-2 px-4 capitalize hover:text-rose-500 hover:bg-gray-100  shadow-lg shadow-gray-500  bg-blue-500 text-sm">{exercise.bodyPart}</span>
          <span className="text-center text-rose-500 bg-gray-100 py-2 px-3 hover:bg-rose-500 hover:text-white">{exercise.target}</span>
        </div>
        <h3 className="text-xl text-center text-black mb-4 font-semibold capitalize break-words ">{str}</h3>
      </div>
    </Link>
  );
};


export default ExerciseCard;