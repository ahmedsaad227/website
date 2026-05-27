"use client"

import { useEffect, useState } from "react"

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true)
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  if (!enabled) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[60] w-[400px] h-[400px] rounded-full transition-transform duration-300 ease-out"
      style={{
        left: pos.x - 200,
        top: pos.y - 200,
        background:
          "radial-gradient(circle, rgba(212,175,55,0.10) 0%, rgba(212,175,55,0) 60%)",
        mixBlendMode: "screen",
      }}
    />
  )
}
