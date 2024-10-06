import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-12 text-blue-500 p-4 flex items-center justify-between border-b-2 border-b-blue-500 uppercase md:h-24 lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/*LOGO*/}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Cellister</Link>
      </div>
      {/*MOBILE MENU*/}
      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
