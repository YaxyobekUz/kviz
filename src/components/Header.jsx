import React from "react";

import logo from "../assets/logo.jpg"

const Header = () => {
  return (
    <header className="flex items-center h-20 border-b">
      <div className="flex items-center gap-2.5 container">
        <img width={44} height={44} src={logo} alt="Nikah Space Logo" className="" />

        {/* title */}
        <h1 className="text-base font-medium text-hed leading-5">
          Nikah Space
        </h1>
      </div>
    </header>
  );
};

export default Header;
