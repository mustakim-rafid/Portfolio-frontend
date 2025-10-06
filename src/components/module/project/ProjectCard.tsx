import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IProject } from "@/types"
import { Link, Monitor } from "lucide-react"

export default function ProjectCard({ ProjectDetails }: { ProjectDetails: IProject }) {
  return (
    <article className="w-full max-w-screen mx-auto p-4 sm:p-6 bg-background border border-muted rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="sm:w-1/3 w-full">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${ProjectDetails.thumbnail}`}
            alt="Project Thumbnail"
            className="w-full h-full object-contain rounded-lg border"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{ProjectDetails.title}</h2>

            <p className="mt-2 text-muted-foreground text-sm sm:text-base">
                {ProjectDetails.description}
            </p>

            <h3 className="mt-4">Features</h3>

            <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
              {
                ProjectDetails.features.map((singleFeature, index) => (
                    <li key={index}>{singleFeature}</li>
                ))
              }
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {ProjectDetails.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <Button asChild variant="default" size="sm" className="dark:text-black font-semibold">
              <a
                href={ProjectDetails.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link /> Live Site
              </a>
            </Button>

            <Button asChild variant="ghost" size="sm">
              <a
                href={ProjectDetails.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Monitor /> GitHub Repo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
