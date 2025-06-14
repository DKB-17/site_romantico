"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react" // Import useEffect

export default function PhotoCarousel() {
  const images = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  // Auto-advance logic
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval) // Clean up the interval on component unmount
  }, [currentIndex]) // Re-run effect if currentIndex changes to reset timer

  return (
    <div className="relative w-full max-w-3xl mx-auto my-8">
      <div className="overflow-hidden rounded-xl shadow-lg">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Romantic moment ${currentIndex + 1}`}
          width={800}
          height={500}
          className="w-full h-auto object-cover aspect-[3/2]"
          priority={true}
        />
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 text-gray-800 rounded-full p-2 shadow-md"
        aria-label="Previous photo"
      >
        <ChevronLeft size={24} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 text-gray-800 rounded-full p-2 shadow-md"
        aria-label="Next photo"
      >
        <ChevronRight size={24} />
      </Button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full ${
              currentIndex === idx ? "bg-white" : "bg-gray-400"
            } transition-colors duration-300`}
            aria-current={currentIndex === idx ? "true" : undefined}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
