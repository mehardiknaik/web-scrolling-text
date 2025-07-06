"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import useTheme from "@/hooks/useTheme";

const Header = () => {
  const path = usePathname();
  const { isDark, toggleTheme } = useTheme();
  return (
    <header className="sticky top-0 w-full px-2 py-4 bg-white dark:bg-black border-b-2 border-gray-200 dark:border-gray-700 z-10">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <Link prefetch={false} href={"/"} className="font-bold">
          WST
        </Link>
        <nav className="flex gap-3 w-full order-3 md:order-none md:flex-1 md:justify-center">
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
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
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
