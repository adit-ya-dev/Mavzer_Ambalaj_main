"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function ReferencesOnly() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Reference logos data
  const references = [
    { 
      id: 1, 
      name: "T.C. Cumhurbaşkanlığı",
      image: "/tc-cumhurbaskanligi-1.jpg",
      alt: "T.C. Cumhurbaşkanlığı Logo"
    },
    { 
      id: 2, 
      name: "Ankara Büyükşehir Belediyesi",
      image: "/tc-ankara-buyuksehir-belediyesi-3.jpg",
      alt: "Ankara Büyükşehir Belediyesi Logo"
    },
    { 
      id: 3, 
      name: "TÜİK",
      image: "/turkiye-istatistik-kurumu-2.jpg",
      alt: "Türkiye İstatistik Kurumu Logo"
    },
    { 
      id: 4, 
      name: "Çağdaş",
      image: "/cagdas-5.jpg",
      alt: "Çağdaş Logo"
    },
    { 
      id: 5, 
      name: "Ramada",
      image: "/ramada-4.jpg",
      alt: "Ramada Logo"
    },
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const currentElement = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const handleImageError = (refName: string) => {
    console.warn(`Failed to load image for ${refName}`);
  };

  return (
    <>
      <style jsx>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
          user-select: none;
          gap: 2rem;
        }
        
        .marquee-content {
          display: flex;
          gap: 2rem;
          animation: scroll-left 30s linear infinite;
        }
        
        .marquee-content-reverse {
          display: flex;
          gap: 2rem;
          animation: scroll-right 30s linear infinite;
        }
        
        .marquee-container:hover .marquee-content,
        .marquee-container:hover .marquee-content-reverse {
          animation-play-state: paused;
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>

      <div id="references-section" className="relative scroll-mt-20">
        <section 
          ref={sectionRef} 
          className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Heading */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-3 sm:mb-4 md:mb-6">
                Referanslarımız
              </h2>
              
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 text-center mb-8 sm:mb-12 md:mb-16 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0">
                Farklı sektörlerden önde gelen kurumlar ve şirketler tarafından güvenilen çözüm ortağınız
              </p>
              
              {/* First Marquee Row - Scrolling Left */}
              <div className="marquee-container mb-8">
                <div className="marquee-content">
                  {/* First set */}
                  {references.map((ref) => (
                    <div key={`${ref.id}-1`} className="flex-shrink-0">
                      <div className="h-20 w-40 sm:h-24 sm:w-48 md:h-28 md:w-56 flex items-center justify-center p-4 bg-white rounded-lg shadow-md border border-gray-200">
                        <Image
                          src={ref.image}
                          alt={ref.alt}
                          width={180}
                          height={80}
                          className="object-contain"
                          onError={() => handleImageError(ref.name)}
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-center mt-2 text-gray-600 font-medium">
                        {ref.name}
                      </p>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {references.map((ref) => (
                    <div key={`${ref.id}-2`} className="flex-shrink-0">
                      <div className="h-20 w-40 sm:h-24 sm:w-48 md:h-28 md:w-56 flex items-center justify-center p-4 bg-white rounded-lg shadow-md border border-gray-200">
                        <Image
                          src={ref.image}
                          alt={ref.alt}
                          width={180}
                          height={80}
                          className="object-contain"
                          onError={() => handleImageError(ref.name)}
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-center mt-2 text-gray-600 font-medium">
                        {ref.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Second Marquee Row - Scrolling Right */}
              <div className="marquee-container">
                <div className="marquee-content-reverse">
                  {/* First set */}
                  {references.map((ref) => (
                    <div key={`${ref.id}-3`} className="flex-shrink-0">
                      <div className="h-20 w-40 sm:h-24 sm:w-48 md:h-28 md:w-56 flex items-center justify-center p-4 bg-white rounded-lg shadow-md border border-gray-200">
                        <Image
                          src={ref.image}
                          alt={ref.alt}
                          width={180}
                          height={80}
                          className="object-contain"
                          onError={() => handleImageError(ref.name)}
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-center mt-2 text-gray-600 font-medium">
                        {ref.name}
                      </p>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {references.map((ref) => (
                    <div key={`${ref.id}-4`} className="flex-shrink-0">
                      <div className="h-20 w-40 sm:h-24 sm:w-48 md:h-28 md:w-56 flex items-center justify-center p-4 bg-white rounded-lg shadow-md border border-gray-200">
                        <Image
                          src={ref.image}
                          alt={ref.alt}
                          width={180}
                          height={80}
                          className="object-contain"
                          onError={() => handleImageError(ref.name)}
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-center mt-2 text-gray-600 font-medium">
                        {ref.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional text */}
              <div className="mt-8 sm:mt-12 md:mt-16 text-center">
                <p className="text-xs sm:text-sm text-gray-500 italic">
                  Ve daha birçok değerli kurumla çalışıyoruz...
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}