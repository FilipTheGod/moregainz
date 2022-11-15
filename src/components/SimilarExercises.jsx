import React from "react";
import SimilarHorizontal from "./SimilarHorizontal";

const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
  return (
    <div className="mt-20 flex flex-col justify-center items-center md:mt-12 sm:mt-12">
      <h2 className="text-4xl mb-8 text-center capitalize md:text-2xl md:m-1 sm:text-xl sm:m-1">Exercises that target the same muscles group</h2>
      <div className="mb-16 w-11/12 md:mb-16 md:w-11/12 sm:self-center sm:w-screen sm:mb-16">
        <SimilarHorizontal targetMuscleExercises={targetMuscleExercises} />
      </div>

      <h2 className="text-4xl mb-8 text-center capitalize md:text-2xl md:m-1 sm:text-xl sm:m-1"> Exercises that uses the same equipments</h2>
      <div className="mb-16 w-11/12 md:mb-16 md:w-11/12 sm:self-center sm:w-screen sm:mb-16">
        <SimilarHorizontal targetMuscleExercises={equipmentExercises} />
      </div>
    </div>
  );
};

export default SimilarExercises;