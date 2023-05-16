"use client"

import { scrollToSection } from "@/lib/scroll"

import { Icons } from "./ui/icons"

const Footer = () => {
  return (
    <div className="mt-10 flex flex-col items-center space-y-5 border-t p-10 md:mt-20 md:flex-row md:space-y-0">
      <div className="flex flex-1 items-center ">
        <Icons.terminal className="mr-2" />
        <p>Made with &lt;3 by Mariano</p>
        <Icons.textCursor className="h-4  w-4 animate-cursor-blink" />
      </div>
      <div className="flex items-center space-x-5">
        <Link title="About" section="about" />
        <Link title="Projects" section="projects" />
        <Link title="Contact" section="contact" />
      </div>
    </div>
  )
}

type LinkProps = {
  title: string
  section: string
}
const Link = ({ title, section }: LinkProps) => (
  <p className="cursor-pointer font-bold transition-transform hover:scale-110" onClick={() => scrollToSection(section)}>
    {title}
  </p>
)

export default Footer
