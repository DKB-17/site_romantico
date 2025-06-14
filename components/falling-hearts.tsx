"use client"

import { useState, useEffect, useRef } from "react"

interface Heart {
  id: number
  size: number
  left: number
  duration: number
  delay: number
  translateX: number
  rotateZ: number
}

export default function FallingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])
  const heartIdRef = useRef(0)

  useEffect(() => {
    const createHeart = () => {
      heartIdRef.current += 1
      const newHeart: Heart = {
        id: heartIdRef.current,
        size: Math.random() * (30 - 15) + 15, // Size between 15px and 30px
        left: Math.random() * 100, // Percentage from left
        duration: Math.random() * (10 - 5) + 5, // Duration between 5s and 10s
        delay: Math.random() * 2, // Delay between 0s and 2s
        translateX: (Math.random() - 0.5) * 200, // Horizontal drift
        rotateZ: (Math.random() - 0.5) * 360, // Rotation
      }
      setHearts((prevHearts) => [...prevHearts, newHeart])

      // Remove heart after its animation duration + a buffer
      setTimeout(
        () => {
          setHearts((prevHearts) => prevHearts.filter((heart) => heart.id !== newHeart.id))
        },
        (newHeart.duration + newHeart.delay) * 1000 + 500,
      ) // Convert to ms and add buffer
    }

    const interval = setInterval(createHeart, 500) // Create a new heart every 0.5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-rose-500"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animation: `fall ${heart.duration}s linear ${heart.delay}s forwards`,
            "--tw-translate-x": `${heart.translateX}px`,
            "--tw-rotate-z": `${heart.rotateZ}deg`,
            willChange: "transform, opacity",
          }}
        >
          &#x2764; {/* Unicode heart symbol */}
        </div>
      ))}
    </div>
  )
}
