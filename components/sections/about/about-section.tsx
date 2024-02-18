import Image from "next/image"
import { dataEN } from "@/data/en"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import styles from "./about.module.css"

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-evenly pb-20 pt-5"
    >
      <div
        className={cn(
          "flex w-[85%] flex-col bg-[#171717] p-3 md:flex-row lg:max-w-5xl",
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
            <h2 className="text-center font-headings text-3xl">
              {dataEN.about.firstName} {dataEN.about.lastName}
            </h2>
            <div className="self-center">
              <ResumeButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ResumeButton = ({ className }: { className?: string }) => (
  <a href={"/MarianoChavez_CV.pdf"} target="_blank">
    <Button
      className={cn(
        "bg-purple-500 text-white transition-all hover:scale-105 hover:bg-purple-200 hover:text-black",
        className
      )}
      size="sm"
    >
      Download resume
    </Button>
  </a>
)

const Description = () => (
  <p className="flex flex-col space-y-3 text-sm md:text-base">
    <span>
      Hi{" "}
      <span aria-labelledby="wave" className={styles.wave} role="img">
        👋🏻
      </span>
      , I&apos;m Mariano, a <HL>Full Stack</HL> developer with a deep passion
      for the art of programming and creating innovative solutions.
    </span>
    <span>
      My focus goes beyond tools and technologies; it&apos;s about contributing
      to the success of the team, the vision of the project, and the value
      delivered to the client.
    </span>
    <span>
      My goal is to drive innovation, grow professionally, and make significant
      contributions to every project I am involved in.
    </span>
  </p>
)

const HL = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-purple-400">{children}</strong>
)

export default AboutSection
