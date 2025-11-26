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

  const [shadow, setShadow] = useState<boolean>(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // useMotionValueEvent jo hai wo like teen chize ati hai okh!..
    // first one is scrollY, "chnages"(string), and callBack ek and latest ko compare karnge okh!..
    if (latest > 20) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  });

  return (
    <Container className="rounded-full">
      <motion.nav
        animate={{
          boxShadow: shadow ? "shadow-2xl" : "none",
          width: shadow ? "50%" : "100%",
          y: shadow ? 10 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className="fixed inset-x-0 top-0 z-50 m-2 flex max-w-4xl items-center justify-between p-2 lg:m-3"
      >
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
      </motion.nav>
    </Container>
  );
};
