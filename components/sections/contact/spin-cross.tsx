"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

type SpinCrossProps = {
  isInView: boolean
  size?: number
}

const SpinCross = ({ size, isInView }: SpinCrossProps) => {
  const [dispValue, setDispValue] = useState(70)
  const [isRotating, setIsRotating] = useState(false)

  useEffect(() => {
    setDispValue(window.innerWidth >= 768 ? 100 : 70)
  }, [])

  useEffect(() => {
    if (isInView) {
      setIsRotating(true)
      const timer = setTimeout(() => {
        setIsRotating(false)
      }, 2000) // Cambia el valor de tiempo para ajustar la duración de la animación
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <div className="absolute h-full w-full">
      <div
        className={cn("relative flex h-full items-center justify-center")}
        // style={{ opacity: isRotating ? 1 : 0 }}
      >
        <div
          className={cn("relative flex items-center justify-center", {
            "spin-cursor": isRotating,
            "spin-cursor-active": isRotating,
          })}
          style={{
            transform: isInView ? "rotate(360deg)" : "rotate(0deg)",
            transition: isInView ? "transform 2s ease-out" : "",
            opacity: isInView ? 1 : 0,
          }}
        >
          <div
            className="absolute w-[2px] origin-top rounded-full bg-purple-500"
            style={{ height: size ?? dispValue }}
          />
          <div
            className="absolute h-[2px] origin-left rounded-full bg-purple-500"
            style={{ width: size ?? dispValue }}
          />
          {[...Array(4)].map((_, i) => {
            const x = i === 1 ? dispValue / 2 : i === 3 ? -dispValue / 2 : 0
            const y = i === 2 ? dispValue / 2 : i === 0 ? -dispValue / 2 : 0

            return (
              <div
                key={i}
                className="absolute h-[10px] w-[10px] origin-center rounded-full bg-purple-500 transition-all duration-1000 ease-in"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView
                    ? `translate(${x}px, ${y}px)`
                    : "translate(0, 0)",
                }}
              ></div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SpinCross
