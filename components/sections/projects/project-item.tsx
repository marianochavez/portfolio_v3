"use client"

import { useEffect, useRef, useState, type MutableRefObject } from "react"
import Image from "next/image"
import { type DataEN } from "@/data/en"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type ProjectItemProps = {
  project: DataEN["projects"][number]
}
const ProjectItem = ({ project }: ProjectItemProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="rounded-lg bg-purple-700">
      <div
        className={cn(
          "h-full overflow-hidden rounded-lg",
          isHovered && "translate-x-2 translate-y-2"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
        style={{
          transition: "transform 0.3s",
        }}
      >
        <ProjectHeader project={project} isHovered={isHovered} />
        <div className="flex h-[calc(100%-190px)] flex-col bg-[#272727] p-3">
          <p className="text-xl font-bold">{project.name}</p>
          <p className="flex-1 pt-2 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2 pt-2 ">
            {project.tools.map((tool) => (
              <Badge key={tool} className="bg-purple-200">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

type ProjectHeaderProps = {
  project: DataEN["projects"][number]
  isHovered: boolean
}
const ProjectHeader = ({ project, isHovered }: ProjectHeaderProps) => {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div
        className={cn(
          "relative min-h-[190px] w-full transition-all",
          isHovered ? "scale-100" : "scale-105"
        )}
      >
        <Image
          src={project.img}
          alt={project.name}
          className={cn("object-cover ", isHovered ? "grayscale-0" : "grayscale")}
          loading="lazy"
          fill
          sizes="100% 190px"
        />
      </div>
      <div className="absolute z-10 flex space-x-2">
        <ProjectHeaderButton
          title={"Repository"}
          link={project.github}
          isHovered={isHovered}
        />
        {project.url && (
          <ProjectHeaderButton
            title={"Website"}
            link={project.url}
            isHovered={isHovered}
          />
        )}
      </div>
    </div>
  )
}

type ProjectHeaderButtonProps = {
  title: string
  link: string
  isHovered: boolean
}
const ProjectHeaderButton = ({
  title,
  link,
  isHovered,
}: ProjectHeaderButtonProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={isHovered ? "pointer-events-auto" : "pointer-events-none"}
    >
      <Button
        className={cn(
          "bg-purple-500 font-semibold text-white transition-all ease-in hover:bg-purple-300 hover:text-black",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        size="sm"
      >
        {title}
      </Button>
    </a>
  )
}

export default ProjectItem
