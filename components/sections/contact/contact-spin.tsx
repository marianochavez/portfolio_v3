"use client"

import { useRef } from "react"

import { Icons } from "@/components/ui/icons"
import { useIsVisible } from "@/components/ui/use-is-visible"

import SpinButton from "./spin-button"
import SpinCross from "./spin-cross"

const ContactSpin = () => {
  const boxRef = useRef<HTMLDivElement>(null)
  const isInView = useIsVisible(boxRef)

  return (
    <div
      className="relative flex min-h-[150px] items-center justify-center pt-10 md:pt-0"
      ref={boxRef}
    >
      <SpinCross isInView={isInView} />
      <SpinButton
        ariaLabel="GitHub"
        icon={<Icons.github2 className="h-12 w-12" />}
        order={1}
        url="https://github.com/marianochavez"
        isInView={isInView}
      />
      <SpinButton
        ariaLabel="LinkedIn"
        icon={<Icons.linkedin2 className="h-12 w-12" />}
        order={2}
        url="https://www.linkedin.com/in/mariano-chavez/"
        isInView={isInView}
      />
      <SpinButton
        ariaLabel="Twitter"
        icon={<Icons.twitter2 className="h-12 w-12" />}
        order={3}
        url="https://twitter.com/chavedoo"
        isInView={isInView}
      />
      <SpinButton
        ariaLabel="Curriculum Vitae"
        icon={<Icons.file className="h-12 w-12" />}
        order={4}
        url="/cv-Mariano-Chavez.pdf"
        isInView={isInView}
      />
    </div>
  )
}

export default ContactSpin
