import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div>
      <footer className="text-center text-xs sm:text-sm bg-gray-700 text-white py-3 mt-40">
        Copyright &#169; {date.getFullYear()}{" "}
        <a
          className="underline"
          href="https://twitter.com/aungmcs"
          target="__blank"
        >
          @aungmcs
        </a>
        . All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;
