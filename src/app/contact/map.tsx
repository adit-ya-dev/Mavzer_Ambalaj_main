"use client";
import React from "react";

export default function IletisimPage() {
  return (
    <div className="min-h-screen">
      {/* Simple Top Section with İLETİŞİM heading */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 py-8 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Main heading with clean styling */}
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-wide">
              İLETİŞİM
            </h1>
            <div className="w-16 h-0.5 bg-white/60 mx-auto"></div>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-blue-100 font-light max-w-xl mx-auto">
            Sorunlarınız için bize ulaşın
          </p>
        </div>
        
        {/* Simple decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-8 left-8 w-20 h-20 border border-white/30 rounded-full"></div>
          <div className="absolute top-16 right-12 w-12 h-12 bg-white/20 rounded-lg rotate-45"></div>
          <div className="absolute bottom-8 left-1/3 w-8 h-8 bg-white/25 rounded-full"></div>
          <div className="absolute top-20 right-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column - Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
              
              {/* Company Name */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                Mavzer Pazarlama Matbaacılık Reklam Ambalaj Gıda Kimya Sanayi ve Ticaret Ltd. Şti.
              </h2>
              
              {/* Address */}
              <div className="mb-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-lg">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">Adres</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Çamlıca, 137. Sk. No: 2<br />
                      06200 Yenimahalle/Ankara
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-lg">✉︎</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">E-posta</h3>
                    <a
                      href="mailto:mavzer@mavzerambalaj.com.tr"
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-base"
                    >
                      mavzer@mavzerambalaj.com.tr
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="mb-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-lg">☎</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-3">Telefon</h3>
                    <div className="space-y-2">
                      <div>
                        <a
                          href="tel:+903123973935"
                          className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 block"
                        >
                          0312 397 3935
                        </a>
                        <span className="text-sm text-gray-500">Sabit Hat</span>
                      </div>
                      <div>
                        <a
                          href="tel:+905336819127"
                          className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors duration-200 block"
                        >
                          0533 681 9127
                        </a>
                        <span className="text-sm text-gray-500">Mobil</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mb-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-lg">⏱</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">Çalışma Saatleri</h3>
                    <div className="text-gray-700 space-y-1">
                      <div>Pazartesi - Cuma: 08:00 - 18:00</div>
                      <div>Cumartesi: 09:00 - 16:00</div>
                      <div>Pazar: Kapalı</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Google Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-full min-h-[350px] lg:min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.2647!2d32.8075!3d39.9543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d5e7e5a5a5%3A0x123456789abcdef0!2s%C3%87aml%C4%B1ca%2C%20137.%20Sk.%20No%3A%202%2C%2006200%20Yenimahalle%2FAnkara%2C%20T%C3%BCrkiye!5e0!3m2!1str!2str!4v1703123456789!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mavzer Ambalaj - Çamlıca, 137. Sk. No: 2, Yenimahalle/Ankara"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
