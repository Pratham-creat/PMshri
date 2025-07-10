import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-center py-4 mt-0">
      <p className="text-sm">
        © {new Date().getFullYear()} PM Shri School. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
