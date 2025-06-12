import React from "react";

const AnimationBackgroundElement = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-400 rounded-full opacity-25 animate-ping"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-green-300 rounded-full opacity-15 animate-bounce"></div>
    </div>
  );
};

export default AnimationBackgroundElement;
