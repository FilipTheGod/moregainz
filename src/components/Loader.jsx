import React from "react";
import { GooeyCircleLoader } from "react-loaders-kit";

export default function Loader() {
  const loaderProps = {
    loading: true,
    size: 120,
    duration: 3,
    colors: ["#f22f59", "#99fffe", "#191923"],
  };

  return (
    <div className="flex flex-col items-center content-center justify-center h-screen m-auto w-full">
      <GooeyCircleLoader {...loaderProps} />
      <h2 className="text-2xl text-blue-700 ">MoreGainz</h2>
    </div>
  );
}



