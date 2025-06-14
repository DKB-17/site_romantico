"use client"

import { motion } from "framer-motion"
import ValentineCard from "./valentine-card"

export default function HeroSection() {
  // Function to generate a random rotation between -5 and 5 degrees
  const getRandomRotation = () => Math.random() * 10 - 5

  const cardsData = [
    {
      src: "/placeholder.svg?height=180&width=250",
      alt: "Couple holding hands",
      width: 250,
      height: 180,
      rotate: getRandomRotation(),
      top: "10%",
      left: "5%",
      zIndex: 20,
    },
    {
      src: "/placeholder.svg?height=200&width=150",
      alt: "Red roses bouquet",
      width: 150,
      height: 200,
      rotate: getRandomRotation(),
      top: "5%",
      left: "80%",
      zIndex: 22,
    },
    {
      src: "/placeholder.svg?height=150&width=280",
      alt: "Heart-shaped chocolates",
      width: 280,
      height: 150,
      rotate: getRandomRotation(),
      top: "30%",
      left: "20%",
      zIndex: 21,
    },
    {
      src: "/placeholder.svg?height=190&width=190",
      alt: "Romantic dinner setting",
      width: 190,
      height: 190,
      rotate: getRandomRotation(),
      top: "70%",
      left: "10%",
      zIndex: 23,
    },
    {
      src: "/placeholder.svg?height=160&width=220",
      alt: "Love letter",
      width: 220,
      height: 160,
      rotate: getRandomRotation(),
      top: "25%",
      left: "65%",
      zIndex: 20,
    },
    {
      src: "/placeholder.svg?height=210&width=180",
      alt: "Couple silhouette at sunset",
      width: 180,
      height: 210,
      rotate: getRandomRotation(),
      top: "60%",
      left: "75%",
      zIndex: 24,
    },
    {
      src: "/placeholder.svg?height=170&width=200",
      alt: "Gift box",
      width: 200,
      height: 170,
      rotate: getRandomRotation(),
      top: "50%",
      left: "5%",
      zIndex: 21,
    },
    {
      src: "/placeholder.svg?height=200&width=160",
      alt: "Champagne glasses",
      width: 160,
      height: 200,
      rotate: getRandomRotation(),
      top: "75%",
      left: "50%",
      zIndex: 22,
    },
  ]

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-white to-rose-100 overflow-hidden">
      {/* Background blobs with rose colors */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-rose-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 h-28 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Title and subtitle - higher z-index to be on top of cards */}
      <div className="relative z-30 text-center mb-12">
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-rose-700 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Happy Valentine's Day!
        </motion.h1>
        <motion.p
          className="mt-4 text-xl md:text-2xl text-rose-800 font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          Celebrating Love, Joy, and Togetherness
        </motion.p>
      </div>

      {/* Cards container - cards are absolutely positioned within this section */}
      {cardsData.map((card, index) => (
        <ValentineCard
          key={index}
          src={card.src}
          alt={card.alt}
          width={card.width}
          height={card.height}
          delay={index * 0.1}
          rotate={card.rotate}
          top={card.top}
          left={card.left}
          zIndex={card.zIndex}
        />
      ))}
    </section>
  )
}
