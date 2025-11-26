"use client";

import { Container } from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

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

export const Navbar = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest);
  });

  return (
    <Container className="rounded-full">
      <nav className="m-2 flex items-center justify-between p-2 lg:m-3">
        <div className="ml-4 rounded-full">
          <Image
            src={"/@techy-Prey.jpg"}
            alt="#khudkiImage"
            height={40}
            width={40}
            className="rounded-full border border-black"
          />
        </div>
        <div className="mr-10 flex items-center gap-4">
          <Button>
            <Sun />
          </Button>
          {navItem.map((index) => (
            <Link
              key={index.id}
              href={index.link}
              onMouseEnter={() => setHovered(index.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-2 py-1 text-sm"
            >
              {hovered === index.id && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 z-0 h-full w-full rounded-full bg-neutral-200 dark:bg-neutral-800"
                ></motion.span>
              )}
              <span className="relative z-10">{index.title}</span>
            </Link>
          ))}
        </div>
      </nav>
    </Container>
  );
};
