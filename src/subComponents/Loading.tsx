import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#FFFFFF] text-[#0F172A]">
      <div className="w-12 h-12 border-4 border-[#BAE6FD] border-t-[#0284C7] rounded-full animate-spin" />
    </div>
  );
};

export default Loading;
