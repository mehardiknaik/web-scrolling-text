import React from "react";
import ScrollingText from "web-scrolling-text";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center p-4">
      <p>© {new Date().getFullYear()} Web Scrolling Text H.N.</p>
      <p>Version- <strong>{ScrollingText.version}</strong></p>
    </footer>
  );
};

export default Footer;
