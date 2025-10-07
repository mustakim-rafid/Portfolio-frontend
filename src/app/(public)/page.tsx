import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/about`, {
    cache: "force-cache",
  });
  const { data } = await res.json();

  return (
    <>
      <BackgroundBeamsWithCollision>
        <section className="min-h-[calc(100vh-101px)] flex flex-col items-center md:items-start justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{data.name}</h1>
          <p className="text-xl md:text-3xl font-semibold mb-4">
            {data.headline}
          </p>
          <p className="text-base md:text-xl text-muted-foreground mb-4 font-semibold">
            I build smooth, complete web experiences that are visually appealing
            and highly reliable.
          </p>
          <div className="flex gap-4">
            <Link href="/about">
              <Button
                variant="default"
                size="lg"
                className="font-bold dark:text-black cursor-pointer"
              >
                Know More
              </Button>
            </Link>
            <Link href="/project">
              <Button
                variant="outline"
                size="lg"
                className="font-semibold cursor-pointer"
              >
                Projects
              </Button>
            </Link>
          </div>
        </section>
      </BackgroundBeamsWithCollision>
    </>
  );
}
