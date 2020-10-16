import React from "react";

const Header = () => {
  return (
    <div className="header bg-blue-600">
      {/* NAV BAR CONTAINER */}
      <nav className="container mx-auto flex pt-8 pb-16 lg:pb-24 px-12 justify-between">
        <h1 className="text-2xl text-white font-bold">devjobs</h1>
        <div className="flex items-center">
          <p className="mr-6 text-white">Saved</p>
          <p className="text-white">Night Mode</p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
