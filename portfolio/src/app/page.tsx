import Image from "next/image";
import { Container } from "@/components/container";
export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-800 md:text-4xl dark:text-neutral-400">
          Techy Prey
        </h1>
        <p className="max-w-lg pt-4 text-sm text-neutral-500 md:text-sm">
          Hi there i am sotfware enginner with a passoinate about how to code
          and!. learning something new daily and much more thing!..
        </p>
      </Container>
    </div>
  );
}

// Yha p dark mode hoga dhyan s khud add kario ek bar okkh!..
