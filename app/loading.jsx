import React from "react";

const Loading = () => {
  return (
    <div className="text-center">
      <div
        className=" animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
        role="status"
      >

      </div>
    </div>
  );
};

export default Loading;
