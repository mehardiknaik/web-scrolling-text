"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname();
  return (
    <header className="sticky top-0 w-full px-2 py-4 bg-white dark:bg-black border-b-2 border-gray-200 dark:border-gray-700 z-10">
      <div className="container mx-auto  md:flex items-center justify-between">
        <Link prefetch={false} href={"/"} className="font-bold">
          WST
        </Link>
        <nav className="flex gap-3 flex-1 md:justify-center">
          {navItems.map(({ href, name }) => (
            <Link
              key={href}
              prefetch={false}
              href={href}
              className={`${path === href ? "border-b-2 font-semibold" : ""}`}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

const navItems = [
  {
    name: "React",
    href: "/react",
  },
  {
    name: "Vanilla Js",
    href: "/vanilla",
  },
  {
    name: "Angular",
    href: "/angular",
  },
  {
    name: "Example",
    href: "/example",
  },
];

export default Header;
