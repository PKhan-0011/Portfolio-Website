// isme hai abhi kuch dikkat isko fix kario subha okkh!..
"use client";
import React, { useState } from "react";
import { Container } from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";

import { motion } from "motion/react";

export const navItems = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/project",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  // Yha p like useState s mai dark and light mode bna dunga okkh!

  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Container className="mx-auto max-w-3xl rounded-full">
      <nav className="m-2 flex items-center justify-between rounded-full p-3">
        <Image
          src="/@techy-Prey.jpg"
          alt="#apniImage"
          height={30}
          width={30}
          className="rounded-full"
        />

        <div className="flex items-center gap-4">
          <Button variant="ghost">
            {" "}
            <Sun />{" "}
          </Button>
          {navItems.map((items) => (
            <Link
              href={items.href}
              key={items.title}
              className="text-secondary relative text-sm font-semibold"
              onMouseEnter={() => setHovered(items.title)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === items.title && (
                <motion.span
                  layoutId="hovered-span"
                  className="dark-bg-neutral-800 absolute inset-0 z-4 h-full w-full overflow-hidden rounded-md bg-neutral-200 p-3 px-4"
                />
              )}
              <motion.span className="relative z-20">
                {" "}
                {items.title}
              </motion.span>
            </Link>
          ))}
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
