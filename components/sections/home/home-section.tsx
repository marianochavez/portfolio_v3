import TextReveal from "@/components/ui/text-reveal"

import GradientImage from "./gradient-image"

const HomeSection = () => {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="relative scale-50 md:scale-100">
        <GradientImage />
        <div className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 space-y-5">
          <h1 className="flex text-9xl font-bold">
            <TextReveal text={"Mariano"} />
            <span>&nbsp;</span>
          </h1>
          <h1 className="flex justify-end text-9xl font-bold">
            <TextReveal text={"Chavez"} />
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-headings text-2xl">Software</p>
          <div className="flex h-[1px] flex-1 self-center bg-foreground" />
          <p className="font-headings text-2xl">Engineer</p>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
