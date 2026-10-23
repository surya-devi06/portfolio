import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#FCF6F4] text-black">
      <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default Loading;
