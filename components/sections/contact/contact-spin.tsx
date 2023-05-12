"use client"

import { ComponentProps, useRef } from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import { useIsVisible } from "@/components/ui/use-is-visible"

import SpinButton from "./spin-button"
import SpinCross from "./spin-cross"

type ContactSpinProps = {
  className?: ComponentProps<"div">["className"]
}

const ContactSpin = ({ className }: ContactSpinProps) => {
  const boxRef = useRef<HTMLDivElement>(null)
  const isInView = useIsVisible(boxRef)

  return (
      <div
        className={cn(
          "relative flex min-h-[250px] w-full items-center justify-center md:pt-16",
          className
        )}
        ref={boxRef}
      >
        <SpinCross isInView={isInView} />
        <SpinButton
          ariaLabel="GitHub"
          icon={<Icons.github2 className="h-8 w-8 md:h-12 md:w-12" />}
          order={1}
          url="https://github.com/marianochavez"
          isInView={isInView}
        />
        <SpinButton
          ariaLabel="LinkedIn"
          icon={<Icons.linkedin2 className="h-8 w-8 md:h-12 md:w-12" />}
          order={2}
          url="https://www.linkedin.com/in/mariano-chavez/"
          isInView={isInView}
        />
        <SpinButton
          ariaLabel="Twitter"
          icon={<Icons.twitter2 className="h-8 w-8 md:h-12 md:w-12" />}
          order={3}
          url="https://twitter.com/chavedoo"
          isInView={isInView}
        />
        <SpinButton
          ariaLabel="Curriculum Vitae"
          icon={<Icons.file className="h-8 w-8 md:h-12 md:w-12" />}
          order={4}
          url="/cv-Mariano-Chavez.pdf"
          isInView={isInView}
        />
      </div>
  )
}

export default ContactSpin
