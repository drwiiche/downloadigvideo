"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeButton from "@/components/theme-button";
import { Icons } from "@/components/Icons";

import { MouseEventHandler, useState } from "react";

const MenuButton = ({ onClick }: { onClick: MouseEventHandler }) => {
  return (
    <button
      onClick={onClick}
      data-collapse-toggle="navbar-dropdown"
      type="button"
      className="order-last ml-3 inline-flex items-center rounded-lg border border-gray-300 p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
      aria-controls="navbar-dropdown"
      aria-expanded="false"
    >
      <span className="sr-only">Open navbar menu</span>
      <Icons.menu />
    </button>
  );
};

const NavLink = ({
  title,
  href,
  target,
  icon,
}: {
  title: string;
  href: string;
  target?: string;
  icon?: JSX.Element;
}) => {
  return (
    <li>
      <Link
        href={href}
        target={target}
        className="flex items-center gap-2 rounded bg-white px-5 py-2 font-medium text-gray-900 hover:bg-gray-100 focus:outline-none dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
      >
        {icon}
        <span>{title}</span>
      </Link>
    </li>
  );
};

const MobileMenuLink = ({
  title,
  href,
  target,
  icon,
}: {
  title: string;
  href: string;
  target?: string;
  icon?: JSX.Element;
}) => {
  return (
    <li>
      <Link
        href={href}
        target={target}
        className="flex w-full items-center gap-4 rounded-lg border border-gray-300 bg-white px-5 py-2 font-medium text-gray-900 hover:bg-gray-100 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700"
      >
        {icon}
        <span>{title}</span>
      </Link>
    </li>
  );
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      role="navigation"
      className="mb-12 flex w-full flex-col items-center justify-between gap-2 border-b border-gray-300 px-2 py-1 shadow-md dark:border-gray-600 dark:shadow-black/25 md:flex-row md:px-8"
    >
      <div className="flex w-full items-center md:gap-2">
        {/* Logo */}
        <div className="mr-auto w-fit">
          <Link className="flex items-center gap-1 py-2" href="/">
            <Image
              className="h-8 w-8 self-center"
              src="/images/logo.png"
              alt="Logo"
              width={128}
              height={128}
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Riad-Azz
            </span>
          </Link>
        </div>
        {/* Dropdown menu button */}
        <MenuButton onClick={() => setShowMenu(!showMenu)} />
        {/* Main Navigation */}
        <ul className="flex shrink-0 gap-2">
          <div className="hidden gap-2 md:flex">
            <NavLink
              target="_blank"
              title="Github Repository"
              href="https://github.com/riad-azz/instagram-videos-downloader"
              icon={<Icons.github />}
            />
          </div>
        </ul>
        {/* Theme */}
        <ThemeButton />
      </div>
      {/* Mobile Menu Navigation */}
      <ul
        className={`mb-2 flex flex-col gap-2 max-md:w-full ${
          !showMenu && "hidden"
        } md:hidden`}
      >
        <MobileMenuLink
          title="Github Repository"
          target="_blank"
          href="https://github.com/riad-azz/instagram-videos-downloader"
          icon={<Icons.github />}
        />
      </ul>
    </header>
  );
};

export default Navbar;