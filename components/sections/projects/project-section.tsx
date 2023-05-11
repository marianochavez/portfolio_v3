import { dataEN } from "@/data/en"

import ChevronsDown from "@/components/ui/chevrons-down"

import ProjectItem from "./project-item"

const ProjectSection = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="py-10 font-headings text-4xl">Projects</h1>
      <div className="mx-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {dataEN.projects.map((project) => (
          <ProjectItem key={project.github} project={project} />
        ))}
      </div>
      <div className="py-7">
        <ChevronsDown />
      </div>
    </section>
  )
}

export default ProjectSection
