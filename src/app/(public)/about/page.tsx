import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MAC | About me"
}

const AboutPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/about`, {
    cache: "force-cache",
  });

  const { data } = await res.json();

  return (
    <>
  <section className="min-h-[calc(100vh-101px)] w-full py-10 md:py-20 px-4 md:px-12 bg-background">
    <div className="max-w-5xl mx-auto">
      <Card className="bg-muted/40 backdrop-blur-md border border-border shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-[auto_min-content_1fr] items-center gap-0 p-8 md:gap-x-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div>
              <h2 className="text-2xl font-bold">{data.name}</h2>
              <Badge variant="outline" className="mt-1 text-sm px-3 py-1">
                {data.headline}
              </Badge>
            </div>
          </div>

          <div className="hidden md:flex h-full justify-center">
            <Separator orientation="vertical" className="h-full" />
          </div>

          <div className="flex flex-col justify-center gap-4 mt-8 md:mt-0">
            <h3 className="text-xl font-semibold text-foreground">About Me</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {data.content}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["TypeScript", "React", "Node", "Next.js", "MongoDB", "PostgreSQL"].map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  </section>
</>

  );
};

export default AboutPage;
