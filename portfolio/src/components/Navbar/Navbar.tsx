"use client";

import React, { useState } from "react";
import { Container } from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const navItem = [
  {
    id: 1,
    title: "About",
    link: "/about",
  },
  {
    id: 2,
    title: "Projects",
    link: "/project",
  },
  {
    id: 3,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 4,
    title: "Blog",
    link: "/blog",
  },
];

const Navbar = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Container className="rounded-full">
      <div className="m-2 mt-4 mr-30 flex items-center justify-around p-2">
        <div className="mr-40 w-10 rounded-full border border-neutral-500 bg-neutral-300 p-0.5">
          <Image
            className="rounded-full"
            height={50}
            width={50}
            src={"/@techy-Prey.jpg"}
            alt={"#ApniImage"}
          />
        </div>
        <div className="flex items-center gap-6">
          {navItem.map((index) => (
            <Link
              key={index.id}
              href={index.link}
              className="relative px-2 py-1 text-[16px] font-semibold text-gray-400 hover:text-gray-600"
            >
              {hovered === index.id && (
                <motion.span
                  layoutId="hovered-span"
                  onMouseEnter={() => setHovered(index.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="absolute inset-0 h-full cursor-pointer rounded-full hover:text-black dark:bg-neutral-800"
                >
                  <span className="relative z-10">{index.title}</span>
                </motion.span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
