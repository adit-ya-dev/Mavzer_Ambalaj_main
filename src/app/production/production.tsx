"use client";
import React from "react";

export default function UretimPage() {
  // Add a simple check to ensure the component renders
  console.log("UretimPage component is rendering");

  return (
    <div className="min-h-screen">
      {/* Simple Top Section with ÜRETİM heading */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 py-12 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Main heading with clean styling */}
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-wide">
              ÜRETİM
            </h1>
            <div className="w-16 h-0.5 bg-white/60 mx-auto"></div>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-blue-100 font-light max-w-xl mx-auto">
            Kaliteli üretim, güvenilir hizmet
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

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            {/* Content Paragraphs */}
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>1997 yılında</strong> ambalaj sektöründe faaliyetlerine başlayan <strong>MAVZER AMBALAJ MATBACILIK REKLAM AMBALAJ ve SAN. TİC. LTD. ŞTİ.</strong>, başlattığı üretim atağıyla sektördeki yerini güçlendirerek <strong>sektörün lideri konumuna</strong> ulaşmıştır. En iyiyi bulmak adına kendimizle yarıştığımız bu sektörde aranan kaliteyi sağlayarak, siz değerli müşterilerimiz tarafından <strong>örnek gösterilmek</strong> en önemli misyonumuzdur.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Bizim için başarı, müşteri memnuniyetinde önceliklerimiz olan <strong>karşılıklı güven, kalite, hızlı üretim ve zamanında ürün teslimidir.</strong> MAVZER AMBALAJ MATBACILIK REKLAM AMBALAJ ve SAN. TİC. LTD. ŞTİ. olarak en önemli tercih edilme sebebimiz <strong>müşteri memnuniyetine verdiğimiz önem</strong>dir.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Ambalaj sektöründeki <strong>bilgi birikimimiz ve deneyimimiz</strong> sayesinde sektörde <strong>ayrıcalıklı bir konumda</strong> bulunmaktayız. Hedefimiz, bu ayrıcalıklı konumdan aldığımız güçle, <strong>teknolojik gelişmeleri</strong> de takip ederek, sürekli gelişerek, ürün kalitemizi <strong>en yükseğe taşıyıp</strong> müşterilerimize hak ettikleri <strong>en kaliteli hizmeti</strong> sunmaktır. Sizlerden aldığımız takdir bizleri daha iyiye doğru götüren yolda <strong>rehberimiz</strong> olmaktadır.
              </p>

              {/* Production Capabilities Highlight */}
              <div className="my-12 p-6 bg-gray-50 rounded-xl border-l-4 border-gray-400">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Üretim Kapasitemiz
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Tesisimizde <strong>kendi imalatımız olan</strong> ürün yelpazemizde barındırdığımız; <strong>kolonyalı ve hijyenik mendil imalatı, baskılı peçete, baskılı dispenser peçete, kağıt havlu, baskılı ambalaj kağıdı, baskılı pide, dürüm, pasta, tatlı kutuları, tek kullanımlık paket tuz, şeker, baharat çeşitleri, sakarin, kürdan, pipet, dole, magnet, oto kokusu, kibrit, baskılı poşet, çatal bıçak kılıfı</strong> <strong>30u aşan son teknoloji makinelerimizle</strong> siz değerli müşterilerimize üretip en kaliteli şekilde sunmaktayız.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                Ambalajla ilgili <strong>500ü aşan ürün çeşitlerimizin</strong> pazarlamasını yapmaktayız.
              </p>

              {/* Certifications Section */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl border-l-4 border-gray-400">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Kalite Güvencesi ve Resmi İzinler
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Üretimini yaptığımız her ürünün <strong>T.C. SAĞLIK BAKANLIĞI, T.C. TARIM ve ORMAN BAKANLIĞI izni</strong> mevcut olup ürünlerimizin hepsi <strong>yürürlükteki tüm yönetmelik ve mevzuatlara uygun</strong> olarak üretilmektedir. Firmamıza ait <strong>MAVZER</strong>, <strong>SEEM</strong> ve <strong>GÜLDESTE</strong> markaları tescillidir.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>Mavzer ailesi</strong> olarak, <strong>müşteri odaklı çalışma stratejimiz</strong> sayesinde her geçen gün sayısı artan <strong>geniş müşteri portföyüne</strong> hizmet vermekten gurur duymaktayız. Siz değerli müşterilerimizin gözünde Mavzer, <strong>dürüstlük ve üstün iş ahlakıyla</strong> bütünleşmiştir. Bu değere <strong>layık olmaya çalışarak</strong> kendimizi geliştirmek odak noktamızdır.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-800 mb-2">25+</div>
                <div className="text-gray-700 font-semibold">Yıllık Deneyim</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
                <div className="text-gray-700 font-semibold">Ürün Çeşidi</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-800 mb-2">30+</div>
                <div className="text-gray-700 font-semibold">Son Teknoloji Makine</div>
              </div>
            </div>

            {/* Production Values */}
            <div className="mt-12 p-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Üretim Değerlerimiz
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Karşılıklı Güven</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Yüksek Kalite</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Hızlı Üretim</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Zamanında Teslimat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}