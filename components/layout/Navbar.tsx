import Link from "next/link";
import React from "react";

export default function Navbar() {
  const navLink = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Apps",
      href: "/apps",
    },
    {
      title: "Installation",
      href: "/installation",
    },
  ];
  return (
    <nav className="w-full bg-[#fafafa5a] backdrop-blur-xl border-b border-gray-300 flex justify-center sticky top-0 ">
      <div className="flex gap-4 p-4">
        {navLink.map((link) => (
          <Link key={link.title} href={link.href}>
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
