import React from "react";
import ScrollingText from "web-scrolling-text";
import { RiNpmjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100/60 dark:bg-gray-800/60 text-center p-4">
      <p>© {new Date().getFullYear()} Web Scrolling Text H.N.</p>
      <div className="flex justify-center space-x-3 items-center">
        <Link
          href="https://github.com/mehardiknaik/web-scrolling-text"
          title="Github"
          target="_blank"
          rel="noreferrer"
          className="text-2xl"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.npmjs.com/package/web-scrolling-text"
          title="Npmjs"
          target="_blank"
          rel="noreferrer"
          className="text-red-600 text-3xl"
        >
          <RiNpmjsFill />
        </Link>
      </div>
      <p>
        Version- <strong>{ScrollingText.version}</strong>
      </p>
    </footer>
  );
};

export default Footer;
