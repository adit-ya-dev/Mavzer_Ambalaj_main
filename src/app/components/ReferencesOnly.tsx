"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function ReferencesOnly() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Reference logos data with image paths
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
    <div id="references-section" className="relative scroll-mt-20">
      {/* References Section */}
      <section 
        ref={sectionRef} 
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)'
        }}
      >
        {/* Animated background shapes - responsive sizes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-16 md:top-20 left-4 sm:left-6 md:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-20 sm:top-32 md:top-40 right-4 sm:right-12 md:right-20 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-purple-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-1/4 sm:left-1/3 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-pink-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Responsive heading */}
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6">
              Referanslarımız
            </h2>
            
            {/* Responsive description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 text-center mb-8 sm:mb-12 md:mb-16 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0">
              Farklı sektörlerden önde gelen kurumlar ve şirketler tarafından güvenilen çözüm ortağınız
            </p>
            
            {/* Logo Grid - Responsive and properly aligned */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 place-items-center">
                {references.map((ref, index) => (
                  <div
                    key={ref.id}
                    className={`w-full transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 100}ms` 
                    }}
                  >
                    {/* Fixed size container for perfect alignment - NO HOVER EFFECTS */}
                    <div className="h-20 w-full max-w-[160px] sm:h-22 sm:max-w-[180px] md:h-24 md:max-w-[200px] flex items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-200 relative mx-auto">
                      <Image
                        src={ref.image}
                        alt={ref.alt}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, 200px"
                        onError={() => handleImageError(ref.name)}
                      />
                    </div>
                    
                    {/* Company name - visible on all screen sizes */}
                    <p className="text-sm text-center mt-3 text-gray-600 font-medium">
                      {ref.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Additional text */}
              <div className="mt-8 sm:mt-12 md:mt-16 text-center">
                <p className="text-xs sm:text-sm text-gray-500 italic">
                  Ve daha birçok değerli kurumla çalışıyoruz...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="w-full h-12 sm:h-16 md:h-20 fill-current text-white"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>
    </div>
  );
}