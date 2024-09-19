import React from "react";

const AnimationPage = ({ children }) => {
  return (
    <div className="animate__animated animate__slideInRight bg-white">
      {children}
    </div>
  );
};

export default AnimationPage;
