"use client"

import Image from "next/image" // Re-import Image
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = () => setIsPlaying(false)
      // Attempt to autoplay
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((error) => {
          console.log("Autoplay prevented:", error)
          setIsPlaying(false) // Ensure state is correct if autoplay fails
        })
    }
  }, []) // Empty dependency array ensures it runs only once on mount

  return (
    <Card className="w-full max-w-sm mx-auto bg-gradient-to-br from-gray-900 to-black text-white rounded-xl shadow-lg overflow-hidden">
      <CardContent className="p-4 flex items-center space-x-4">
        {" "}
        {/* Adjusted spacing */}
        <div className="flex-shrink-0">
          <Image
            src="/placeholder.svg?height=64&width=64" // Placeholder for album art
            alt="Album Art"
            width={64}
            height={64}
            className="rounded-full object-cover" // Make image round
          />
        </div>
        <div className="text-left flex-grow">
          <h4 className="text-xl font-bold">Our Song</h4>
          <p className="text-gray-400 text-sm">Romantic Melody</p>
        </div>
        <div className="flex-shrink-0">
          <Button
            variant="ghost"
            size="lg"
            onClick={togglePlayPause}
            className="text-white hover:bg-gray-800"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </Button>
        </div>
        <audio ref={audioRef} src="/placeholder.mp3" loop />
      </CardContent>
    </Card>
  )
}
