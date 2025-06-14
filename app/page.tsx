import MusicPlayer from "@/components/music-player"
import PhotoCarousel from "@/components/photo-carousel"
import RomanticText from "@/components/romantic-text"
import FallingHearts from "@/components/falling-hearts"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
      {/* Falling Hearts Background */}
      <FallingHearts />

      <main className="relative z-10">
        {/* New Hero Section */}
        <HeroSection />

        {/* Existing Music Player Section */}
        <section className="py-12 flex justify-center items-center">
          <MusicPlayer />
        </section>

        {/* Existing Photo Carousel Section */}
        <section className="py-12">
          <PhotoCarousel />
        </section>

        {/* Existing Romantic Text Section */}
        <section className="py-12">
          <RomanticText />
        </section>
      </main>
    </div>
  )
}
