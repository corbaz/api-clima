import React from "react";

export const Main = (props) => {
  return (
    <div className="flex h-screen w-full ">
      <div className="text-orange-500 text-6xl mx-auto my-auto">
        {props.ciudad}
      </div>
    </div>
  );
};
