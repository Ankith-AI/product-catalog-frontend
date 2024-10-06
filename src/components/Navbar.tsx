import React from "react";
import Menu from "./menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      {/*LOGO*/}
      <div>
        <Link href="/">Cellister</Link>
      </div>
      {/*MOBILE MENU*/}
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
