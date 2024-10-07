import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-blue-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">
        CELLISTER
      </Link>
      <p className="p-8">Copyright © 2024, Ankith-AI. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
