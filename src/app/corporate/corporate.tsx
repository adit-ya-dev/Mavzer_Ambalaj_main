"use client";
import React from "react";
import Image from "next/image";

export default function KurumsalPage() {
  return (
    <div className="min-h-screen">
      {/* Simple Top Section with KURUMSAL heading */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 py-12 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Main heading with clean styling */}
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-wide">
              KURUMSAL
            </h1>
            <div className="w-16 h-0.5 bg-white/60 mx-auto"></div>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-blue-100 font-light max-w-xl mx-auto">
            Hakkımızda bilgi edinin
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
          
          {/* HAKKIMIZDA Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              HAKKIMIZDA
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            {/* First paragraph */}
            <div className="mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>1997 yılında</strong> ambalaj sektöründe faaliyetlerine başlayan <strong>MAVZER AMBALAJ MATBACILIK REKLAM AMBALAJ ve SAN. TİC. LTD. ŞTİ.</strong>, başlattığı üretim atağıyla sektördeki yerini güçlendirerek <strong>sektörün lideri konumuna</strong> ulaşmıştır. <strong>Çeyrek asrı aşan tecrübesi</strong> ile kafeler, lokantalar, oteller, market, resmi kurumlar, medikal ve endüstri sektörünün sarf malzemesi ihtiyacına <strong>en üst düzeyden yanıt veren</strong> Mavzer, üreticiden son tüketiciye uzanan yolculuğunda <strong>kalite standartlarından taviz vermeden</strong> her geçen gün büyüyor.
              </p>
            </div>

            {/* Responsive Hero Image */}
<div className="my-12">
  <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[18/5] max-h-[320px]">
    <Image
      src="/slider3.jpg"
      alt="Mavzer Ambalaj Tesisleri"
      width={1080}
      height={300}
      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1080px"
    />
  </div>
</div>


            {/* Remaining content */}
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>En iyi bulmak adına</strong> kendimizle yarıştığımız bu sektörde, aranan kaliteyi sağlayarak siz değerli müşterilerimiz tarafından <strong>örnek gösterilmek</strong> en önemli misyonumuzdur. Bu misyon doğrultusunda üretimini gerçekleştirdiğimiz <strong>en küçük materyalde dahi</strong> en ufak bir sorun olmadan sizlere ulaştırmayı kendimize görev biliyoruz. <strong>Islak mendil, şeker, karton kutular, ambalaj ve kese kağıdı</strong> gibi onlarca ürün grubumuzla sizlere <strong>en iyisini</strong> sunuyoruz. Bizi tercih eden danışanlarımız, bu sayede <strong>marka değerini artırıyor</strong> ve Mavzer kalitesi ile gücüne güç katıyor.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Bizim için başarı, müşteri memnuniyetinde önceliklerimiz olan <strong>karşılıklı güven, kalite, hızlı üretim ve zamanında ürün teslimidir.</strong> <strong>MAVZER AMBALAJ MATBACILIK REKLAM AMBALAJ ve SAN. TİC. LTD. ŞTİ.</strong> olarak en önemli tercih edilme sebebimiz <strong>müşteri memnuniyetine verdiğimiz önem</strong>dir. Bu doğrultuda tam <strong>25 yıldır hiç durmadan</strong> çalışıyoruz.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Ambalaj sektöründeki <strong>bilgi birikimimiz ve deneyimimiz</strong> sayesinde sektörde <strong>ayrıcalıklı bir konumda</strong> bulunmaktayız. Hedefimiz, bu ayrıcalıklı konumdan aldığımız güçle, <strong>teknolojik gelişmeleri</strong> de takip ederek, sürekli gelişerek, ürün kalitemizi <strong>en yükseğe taşıyıp</strong> müşterilerimize hak ettikleri <strong>en kaliteli hizmeti</strong> sunmaktır. Sizlerden aldığımız takdir bizleri daha iyiye doğru götüren yolda <strong>rehberimiz</strong> olmaktadır.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Tesisimizde <strong>kendi imalatımız olan</strong> ürün yelpazemizde barındırdığımız; <strong>kolonyalı ve hijyenik mendil imalatı, baskılı peçete, baskılı dispenser peçete, kağıt havlu, baskılı ambalaj kağıdı, baskılı pide, dürüm, pasta, tatlı kutuları, tek kullanımlık paket tuz, şeker, baharat çeşitleri, sakarin, kürdan, pipet, dole, magnet, oto kokusu, kibrit, baskılı poşet, çatal bıçak kılıfı</strong> <strong>30&apos;u aşan son teknoloji makinelerimizle</strong> siz değerli müşterilerimize üretip <strong>en kaliteli şekilde</strong> sunmaktayız.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Ambalajla ilgili <strong>500&apos;ü aşan ürün çeşitlerimizin</strong> pazarlamasını yapmaktayız.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Üretimini yaptığımız her ürünün <strong>T.C. SAĞLIK BAKANLIĞI, T.C. TARIM ve ORMAN BAKANLIĞI izni</strong> mevcut olup ürünlerimizin hepsi <strong>yürürlükteki tüm yönetmelik ve mevzuatlara uygun</strong> olarak üretilmektedir. Firmamıza ait <strong>MAVZER, SEEM ve GÜLDESTE</strong> markaları tescillidir.
              </p>
            </div>

            {/* Bottom highlight */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl border-l-4 border-blue-500">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-lg font-semibold text-blue-900">
                    25 Yıllık Deneyim | 500+ Ürün Çeşidi | Tescilli Markalar
                  </p>
                  <p className="text-blue-700">
                    MAVZER, SEEM ve GÜLDESTE markaları ile güvenilir çözümler sunuyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}