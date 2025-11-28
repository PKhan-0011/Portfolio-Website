import Image from "next/image";
import { Container } from "@/components/container";
export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="w-100% min-h-screen px-10 md:pt-20 md:pb-10">
        <h1 className="text-primary dark:text-secondary text-3xl font-bold tracking-tight md:text-4xl">
          Techy Prey
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm tracking-tight md:text-base">
          Hi there i am sotfware enginner with a passoinate about how to code
          and!. learning something new daily and much more thing!..
        </p>
      </Container>
    </div>
  );
}

// Yha p dark mode hoga dhyan s khud add kario ek bar okkh!..
