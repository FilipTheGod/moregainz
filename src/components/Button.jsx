import React from "react";
const Button = ({ text, target, className }) => {
  return (
    <div  className="rounded-md cursor-pointer font-medium text-xl py-2 px-5 text-white no-underline bg-blue-700 ease-in-out duration-200 hover:bg-white hover:text-blue-600 md:py-3 md:px-6 sm:rounded sm:py-2 sm:px-4">
    <div href={`${target}`} className={className || ""}>
      {text}
    </div>
    </div>
  );
};
export default Button;