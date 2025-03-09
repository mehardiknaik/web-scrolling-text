"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname();
  return (
    <header className="sticky top-0 w-full px-2 py-4 bg-white/60 dark:bg-black/60 border-b-2 border-gray-200 dark:border-gray-700 z-10 md:flex items-center justify-between">
      <Link prefetch={false} href={"/"} className="font-bold">
        WST
      </Link>
      <nav className="flex gap-3 flex-1 md:justify-center">
        <Link
          prefetch={false}
          href="/react"
          className={`${path === "/react" ? "border-b-2 font-semibold" : ""}`}
        >
          React
        </Link>
        <Link
          prefetch={false}
          href="/vanilla"
          className={`${path === "/vanilla" ? "border-b-2 font-semibold" : ""}`}
        >
          Vanilla Js
        </Link>
      </nav>
    </header>
  );
};

export default Header;
