import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function HeroSlider() {
  const totalSlides = 3
  const [currentSlide, setCurrentSlide] = React.useState(0)
 
  // Auto slide every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(interval)
  }, [])
 
  return (
    <div className="relative w-full h-[150px] xs:h-[180px] sm:h-[220px] md:h-[300px] lg:h-[400px] xl:h-[450px] mt-[-68px]">
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full h-full"
      >
        <CarouselContent
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: "transform 0.6s ease-in-out",
            display: "flex",
          }}
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <CarouselItem
              key={index}
              className=" w-full h-[150px] xs:h-[180px] sm:h-[220px] md:h-[300px] lg:h-[400px] xl:h-[450px] flex-shrink-0"
            >
              <div className="p-0  h-full w-full">
                <Card className="p-12 h-full w-full border-0 rounded-none overflow-hidden">
                  <CardContent className="p-0 h-full w-full relative">
                    <Image
                      src={`/slider${index + 1}.png`}
                      alt={`Slide ${index + 1}`}
                      fill
                      priority={index === 0}
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + totalSlides) % totalSlides
            )
          }
          className="hidden sm:flex left-1 sm:left-2 md:left-4 lg:left-48 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
        />
        <CarouselNext
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % totalSlides)
          }
          className="hidden sm:flex right-1 sm:right-2 md:right-4 lg:right-48 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
        />
      </Carousel>
      {/* Pagination Dots */}
      <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 md:bottom-5 left-0 right-0 flex justify-center gap-1 xs:gap-1.5 sm:gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white scale-125" : "bg-gray-400 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
