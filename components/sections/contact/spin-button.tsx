"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

type SpinButtonProps = {
  icon: React.ReactNode
  order: 1 | 2 | 3 | 4
  url: string
  ariaLabel: string
  isInView: boolean
}

const SpinButton = ({
  icon,
  order,
  url,
  ariaLabel,
  isInView,
}: SpinButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [dispValue, setDispValue] = useState(70)

  useEffect(() => {
    setDispValue(window.innerWidth >= 768 ? 100 : 70)
  }, [])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className={cn(
        "relative inline-flex items-center justify-center duration-1000",
        isInView ? "opacity-100" : "opacity-0"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isInView ? getTransformStyle(order, dispValue) : "",
      }}
    >
      <button
        aria-label={ariaLabel}
        className={cn(
          "absolute transition-all animate-in fade-in",
          isHovered ? "text-purple-500" : "text-white",
          isHovered ? "scale-125" : "scale-100"
        )}
      >
        {icon}
      </button>
    </a>
  )
}

type TransformMap = {
  [key in 1 | 2 | 3 | 4]: string
}

function getTransformStyle(order: 1 | 2 | 3 | 4, dispValue: number): string {
  const transformMap: TransformMap = {
    1: `translateY(-${dispValue}px)`,
    2: `translateX(${dispValue}px)`,
    3: `translateY(${dispValue}px)`,
    4: `translateX(-${dispValue}px)`,
  }

  return transformMap[order] || ""
}

export default SpinButton
