import Image from "next/image"
import { dataEN } from "@/data/en"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import ChevronsDown from "@/components/ui/chevrons-down"

import styles from "./about.module.css"

const AboutSection = () => {
  return (
    <section className="flex flex-col  items-center justify-evenly pt-5">
      <div
        className={cn(
          "flex max-w-[85%] flex-col bg-[#171717] p-3  md:max-w-[90%] md:flex-row lg:max-w-[70%]",
          styles.boxGlow
        )}
      >
        <div className="order-2 flex-1 p-3 pr-2 md:order-1">
          <Description />
          <div className="order-1 mt-4 text-center md:hidden lg:order-3">
            <ResumeButton />
          </div>
        </div>
        <div
          className={cn(
            "order-1 flex flex-1 items-center justify-center space-y-5",
            "border-white md:order-2 md:flex-col md:border-l"
          )}
        >
          <Image
            alt="Profile picture"
            src={dataEN.about.img}
            width={200}
            height={200}
            className="h-[7rem] w-[7rem] rounded-[50%] object-cover md:h-[10rem] md:w-[10rem]"
            loading="lazy"
          />
          <div className="hidden flex-col space-y-5 md:flex ">
            <h2 className="font-headings text-3xl ">
              {dataEN.about.firstName} {dataEN.about.lastName}
            </h2>
            <div className="self-center">
              <ResumeButton />
            </div>
          </div>
        </div>
      </div>

      <div className="py-7">
        <ChevronsDown />
      </div>
    </section>
  )
}

const ResumeButton = ({ className }: { className?: string }) => (
  <Button className={cn("bg-purple-400", className)} size="sm">
    <a href={"/cv-Mariano-Chavez.pdf"} target="_blank">
      Download resume
    </a>
  </Button>
)

const Description = () => (
  <p className="flex flex-col space-y-3 text-sm md:text-base">
    <span>
      Hi{" "}
      <span aria-labelledby="wave" className={styles.wave} role="img">
        👋🏻
      </span>
      , I&apos;m Mariano!
    </span>
    <span>
      I am a <HL>full stack</HL> developer with a great passion for programming.
      I<HL> specialize in frontend</HL> development, using technologies such as
      JavaScript, React and Next.js.
    </span>
    <span>
      I also have experience in backend development, using Node.js, Django and
      Ruby on Rails. I like to apply <HL>design patterns </HL>
      and <HL>engineering principles </HL>
      to create web applications of quality and efficiency.
    </span>
    <span>
      My goal is to keep learning new technologies and exploring different
      domains of knowledge.
    </span>
  </p>
)

const HL = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-purple-400">{children}</strong>
)

export default AboutSection
