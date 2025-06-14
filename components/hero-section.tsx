"use client"

import { motion } from "framer-motion"
import ValentineCard from "./valentine-card"

export default function HeroSection() {
  // Function to generate a random rotation between -5 and 5 degrees
  const getRandomRotation = () => Math.random() * 10 - 5

  const cardsData = [
    {
      src: "/img/ft1.jpg",
      alt: "A vida e feita de momentos",
      width: 250,
      height: 180,
      rotate: getRandomRotation(),
      top: "10%",
      left: "5%",
      zIndex: 20,
    },
    {
      src: "/img/ft2.jpg",
      alt: "Aproveitar eles",
      width: 150,
      height: 200,
      rotate: getRandomRotation(),
      top: "5%",
      left: "80%",
      zIndex: 22,
    },
    {
      src: "/img/ft9.jpg",
      alt: "Faz parte do que temos de melhor",
      width: 280,
      height: 150,
      rotate: getRandomRotation(),
      top: "30%",
      left: "20%",
      zIndex: 21,
    },
    {
      src: "/img/ft3.jpg",
      alt: "Cada momento",
      width: 190,
      height: 190,
      rotate: getRandomRotation(),
      top: "70%",
      left: "10%",
      zIndex: 23,
    },
    {
      src: "/img/ft8.jpg",
      alt: "E uma oportunidade",
      width: 220,
      height: 160,
      rotate: getRandomRotation(),
      top: "25%",
      left: "65%",
      zIndex: 20,
    },
    {
      src: "/img/ft6.jpg",
      alt: "De amar e aprender",
      width: 180,
      height: 210,
      rotate: getRandomRotation(),
      top: "60%",
      left: "75%",
      zIndex: 24,
    },
    {
      src: "/img/ft4.jpg",
      alt: "A ser amado",
      width: 200,
      height: 170,
      rotate: getRandomRotation(),
      top: "50%",
      left: "5%",
      zIndex: 21,
    },
    {
      src: "/img/ft10.jpg",
      alt: "Obrigado por ser especial",
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
          className="text-2xl md:text-7xl lg:text-6xl font-extrabold text-rose-700 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Para minha Bruxinha
        </motion.h1>
        <motion.p
          className="mt-4 text-xl md:text-2xl text-rose-800 font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          Te escolho como a varinha escolhe o bruxo.
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
