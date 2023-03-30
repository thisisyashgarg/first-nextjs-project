import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex p-4 px-10 justify-between items-center">
      <div>
        <Link href={"/"}>
          <Image src="/logo.png" width={128} height={77} alt="logo" />
        </Link>
      </div>
      <div className="sm:flex space-x-6 hidden">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ninjas">Ninja Listing</Link>
      </div>
    </nav>
  );
};

export default Navbar;
