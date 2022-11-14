import React, { useRef } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import ExerciseCard from "./Ex.ExerciseCard";
const SimilarHorizontal = ({ targetMuscleExercises }) => {
  const ref = useRef(null);

  const LeftHandler = () => {
    ref.current.scrollLeft -= 500;
  };
  const RightHandler = () => {
    ref.current.scrollLeft += 500;
  };
  return (
    <div className="flex gap-10 md:gap-6">
      <div  className="flex items-center justify-center m-auto p-4 text-blue-700 rounded-lg bg-white shadow-lg shadow-gray-500 hover:bg-blue-700 cursor-pointer md:p-2 sm:hidden sm:p-1"
      onClick={LeftHandler}>
        <KeyboardArrowLeftIcon />
      </div>
      <div className="flex flex-no-wrap h-auto overflow-x-auto overflow-y-hidden p-1 w-full scroll-smooth  scrolling-touch scrollbar"
       ref={ref}>
        {targetMuscleExercises.map((item) => (
          <div className="child" key={item}>
            <ExerciseCard exercise={item} flg={true} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center m-auto p-4 text-rose-600 rounded-lg bg-white shadow-lg shadow-gray-500 hover:bg-rose-500 cursor-pointer md:p-2 sm:hidden sm:p-1"
       onClick={RightHandler}>
        <KeyboardArrowRightIcon />
      </div>
    </div>
  );
};

export default SimilarHorizontal;