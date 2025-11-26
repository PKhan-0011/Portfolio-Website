import Image from "next/image";
import { Container } from "@/components/container";
export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="lg:pd-8 min-h-screen p-4 md:p-6">
        <h1 className="text-primary">Hi there!</h1>
        <p>
          Hi there i am sotfware enginner with a passoinate about how to code
          and!. learning something new daily and much more thing!..
        </p>
      </Container>
    </div>
  );
}

// Yha p dark mode hoga dhyan s khud add kario ek bar okkh!..
