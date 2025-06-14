"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface ValentineCardProps {
  src: string
  alt: string
  width: number
  height: number
  delay: number
  rotate: number
  top?: string // Optional top position
  left?: string // Optional left position
  zIndex?: number // Optional z-index
}

export default function ValentineCard({
  src,
  alt,
  width,
  height,
  delay,
  rotate,
  top,
  left,
  zIndex,
}: ValentineCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: 0 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: rotate,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const revealVariants = {
    hidden: { scaleX: 1 },
    visible: {
      scaleX: 0,
      transition: {
        delay: delay + 0.3,
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  }

  return (
    <motion.div
      className="absolute overflow-hidden rounded-xl shadow-lg group cursor-pointer" // Changed to absolute
      style={{
        width: `${width}px`,
        height: `${height}px`,
        top,
        left,
        zIndex, // Apply zIndex
      }}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        priority={true}
      />
      <motion.div
        className="absolute inset-0 bg-rose-600 origin-left"
        variants={revealVariants}
        initial="hidden"
        animate="visible"
      />
    </motion.div>
  )
}
