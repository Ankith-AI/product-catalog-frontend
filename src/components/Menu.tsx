"use client";

// import React from "react";
// import * as React from 'react';
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  // { id: 3, title: "Working Hours", url: "/" },
  { id: 3, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <Image
          src="/menu.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/menu_close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-blue-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
