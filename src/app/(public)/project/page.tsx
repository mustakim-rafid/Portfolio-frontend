import ProjectCard from '@/components/module/project/ProjectCard'
import { IProject } from '@/types'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "MAC | Projects"
}

const ProjectPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project`, {
    cache: "force-cache"
  })
  const {data} = await res.json()

  return (
    <div className='p-5 space-y-5'>
      {
        data.map((project: IProject) => (
          <ProjectCard key={project.id} ProjectDetails={project} />
        ))
      }
    </div>
  )
}

export default ProjectPage