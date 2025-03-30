import React from "react";
import ScrollingText from "web-scrolling-text";

const {basePath=""}= process.env

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center p-4">
      <p>© {new Date().getFullYear()} Web Scrolling Text H.N.</p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/mehardiknaik/web-scrolling-text"
          title="Github"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
        >
          <img src={`${basePath}/git.png`} alt="GitHub" width={24} height={24} />
        </a>
        <a
          href="https://www.npmjs.com/package/web-scrolling-text"
          title="Npmjs"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
        >
          <img src={`${basePath}/npm.png`} alt="Npmjs" width={24} height={24} />
        </a>
      </div>
      <p>
        Version- <strong>{ScrollingText.version}</strong>
      </p>
    </footer>
  );
};

export default Footer;
