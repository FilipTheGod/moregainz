import React from "react";
import BodyPartImage from "../assets/images/bodyPart.png";
import TargetImage from "../assets/images/target.png";
import EquipmentImg from "../assets/images/equipment.png";
const ExerciseDetail = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;
  const ExtraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImg,
      name: equipment,
    },
  ];
  return (
    <div className="w-11/12 flex justify-between my-12 mx-auto py-8 px-12 gap-24 rounded-lg shadow-lg shadow-gray-500 md:flex-col md:p-8 md:gap-8 md:my-12 md:mx-auto sm:flex-col sm:my-12 sm:mx-auto sm:p-2 sm:gap-8">
      <div className="w-3/5 flex justify-center items-center md:m-auto sm:m-auto">
        <img src={gifUrl} alt={name} loading="lazy" className="w-full" />
      </div>
      <div className="flex flex-col content-center justify-center md:flex md:flex-col md:content-center md:justify-center md:py-0 md:px-4 sm:flex sm:flex-col sm:content-center sm:justify-center sm:mb-6 sm:py-0 sm:px-3">
        <h3 className="mt-8 font-bold capitalize text-4xl md:m-0 sm:text-2xl sm:m-0">{name}</h3>

        <p className="mt-4 text-xl font-medium text-gray-900 sm:text-xl">
          Exercises keep you strong.{" "}
          <strong style={{ color: "#f22f59" }}>{name}</strong> is the one of the
          best exercises to target your{" "}
          <strong style={{ color: "#f22f59" }}>{target}</strong>. It will help
          you to improve your mood and gain energy.
        </p>
        {ExtraDetails.map((item) => (
          <div key={item} className="mt-8 flex gap-8 items-center">
            <div className="w-16 h-16 bg-gray-100 flex justify-center items-center p-4 rounded-lg shadow-gray-500 hover:bg-rose-500 md:w-16 md:h-16 sm:h-12 sm:w-12">
              <img className="w-full" src={item.icon} alt={item.name} />
            </div>
            <p className="text-2xl capitalize text-gray-900 sm:text-xl">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ExerciseDetail;