import React from "react";

const BodyPart = ({ item, img, setBodyPart, bodyPart }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center justify-center m-auto py-4 px-8 text-center w-64 gap-6 rounded-lg h-72  shadow-lg shadow-gray-500 hover:bg-gray-500 md:w-48 md:h-64 sm:w-40 sm:h-64 sm:shadow-lg sm:shadow-gray-500 sm:hover:bg-gray-500"
      type="button"
      style={
        bodyPart === item
          ? {
              borderTop: "5px solid #1460e5",
              borderBottom: "5px solid #1460e5",
            }
          : { border: "none" }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <div className="w-4/5">
        <img className="opacity-90 w-full" src={img} alt="arms.png" loading="lazy" />
      </div>
      <h2 className="capitalize">{item}</h2>
    </div>
  );
};
export default BodyPart;