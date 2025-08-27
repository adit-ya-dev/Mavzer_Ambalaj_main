"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Category {
  id: string;
  name: string;
  image: string;
}

interface ContentItem {
  id: string;
  category: string;
  name: string;
  link: string;
  image: string;
}

interface CategoryCardsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  setDropdownOpen?: (open: boolean) => void;
  setSidebarOpen?: (open: boolean) => void;
}

const CategoryCards: React.FC<CategoryCardsProps> = ({
  activeCategory,
  setActiveCategory,
  setDropdownOpen,
  setSidebarOpen,
}) => {
  const router = useRouter();

  const handleCategoryNavigation = (categoryId: string) => {
    // Close dropdowns if the functions are provided
    if (setDropdownOpen) setDropdownOpen(false);
    if (setSidebarOpen) setSidebarOpen(false);

    // Set the category first
    setActiveCategory(categoryId);

    const isHomepage = window.location.pathname === '/';

    if (isHomepage) {
      // We're already on homepage, just scroll to the category cards
      setTimeout(() => {
        const element = document.getElementById('category-cards');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          window.scrollTo({
            top: 600,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Not on homepage - navigate to homepage with scroll parameter
      router.push(`/?scroll=category&category=${categoryId}`);
    }
  };

  const categories: Category[] = [
    {
      id: 'restaurant',
      name: 'Restoran',
      image: '/catagory/restaurant.jpg'
    },
    {
      id: 'cafe',
      name: 'Kafe',
      image: '/catagory/cafe.jpg'
    },
    {
      id: 'hotel',
      name: 'Otel',
      image: '/catagory/hotel.jpg'
    },
    {
      id: 'official',
      name: 'Resmi Kurum',
      image: '/catagory/institution.jpg'
    },
    {
      id: 'medical',
      name: 'Medikal',
      image: '/catagory/medical.jpg'
    },
    {
      id: 'industrial',
      name: 'Endüstriyel',
      image: '/catagory/industries.jpg'
    },
  ];

  const contentItems: ContentItem[] = [
    // Restaurant items
    { id: 'r1', category: 'restaurant', name: 'Islak Mendil Ambalajları', link: '/restaurant', image: '/restaurant_cafe_hotel/ıslakmendil.png' },
    { id: 'r2', category: 'restaurant', name: 'Toz Şeker Ambalajı', link: '/restaurant', image: '/restaurant_cafe_hotel/3tozşeker.png' },
    { id: 'r3', category: 'restaurant', name: 'Çorba Kaseleri', link: '/restaurant', image: '/restaurant_cafe_hotel/4çorba_kase.png' },
    { id: 'r4', category: 'restaurant', name: 'Kağıt Çanta', link: '/restaurant', image: '/restaurant_cafe_hotel/5kagıt_canta.png' },
    { id: 'r5', category: 'restaurant', name: 'Ambalaj Kağıdı', link: '/restaurant', image: '/restaurant_cafe_hotel/6kese_kağıdı.png' },
    { id: 'r6', category: 'restaurant', name: 'Naylon Poşet', link: '/restaurant', image: '/restaurant_cafe_hotel/7naylon_poşet.png' },
    
    // Cafe items
    { id: 'c1', category: 'cafe', name: 'Pipet Ambalajı', link: '/cafe', image: '/restaurant_cafe_hotel/8pipet_ambalaj.png' },
    { id: 'c2', category: 'cafe', name: 'Peçete', link: '/cafe', image: '/restaurant_cafe_hotel/10peçete.png' },
    { id: 'c3', category: 'cafe', name: 'Mukavva Kutu', link: '/cafe', image: '/restaurant_cafe_hotel/11mukavva.png' },
    { id: 'c4', category: 'cafe', name: 'Karton Kutular', link: '/cafe', image: '/restaurant_cafe_hotel/carton_kutular.jpg' },
    { id: 'c5', category: 'cafe', name: 'Şeker Ambalajı', link: '/cafe', image: '/restaurant_cafe_hotel/3tozşeker.png' },
    { id: 'c6', category: 'cafe', name: 'Islak Mendil', link: '/cafe', image: '/restaurant_cafe_hotel/ıslakmendil.png' },
    
    // Hotel items
    { id: 'h1', category: 'hotel', name: 'Otel Islak Mendilleri', link: '/hotel', image: '/restaurant_cafe_hotel/ıslakmendil.png' },
    { id: 'h2', category: 'hotel', name: 'Oda Servisi Çanta', link: '/hotel', image: '/restaurant_cafe_hotel/5kagıt_canta.png' },
    { id: 'h3', category: 'hotel', name: 'Minibar Şekerleri', link: '/hotel', image: '/restaurant_cafe_hotel/3tozşeker.png' },
    { id: 'h4', category: 'hotel', name: 'Oda Peçeteleri', link: '/hotel', image: '/restaurant_cafe_hotel/10peçete.png' },
    { id: 'h5', category: 'hotel', name: 'Servis Kutuları', link: '/hotel', image: '/restaurant_cafe_hotel/11mukavva.png' },
    { id: 'h6', category: 'hotel', name: 'Çorba Servisi', link: '/hotel', image: '/restaurant_cafe_hotel/4çorba_kase.png' },
    
    // Official items
    { id: 'o1', category: 'official', name: 'Resmi Islak Mendil', link: '/institution', image: '/restaurant_cafe_hotel/ıslakmendil.png' },
    { id: 'o2', category: 'official', name: 'Kurumsal Çantalar', link: '/institution', image: '/restaurant_cafe_hotel/5kagıt_canta.png' },
    { id: 'o3', category: 'official', name: 'Ofis Şekerleri', link: '/institution', image: '/restaurant_cafe_hotel/3tozşeker.png' },
    { id: 'o4', category: 'official', name: 'Resmi Peçeteler', link: '/institution', image: '/restaurant_cafe_hotel/10peçete.png' },
    { id: 'o5', category: 'official', name: 'Kurum Kutuları', link: '/institution', image: '/restaurant_cafe_hotel/11mukavva.png' },
    { id: 'o6', category: 'official', name: 'Ofis Poşetleri', link: '/institution', image: '/restaurant_cafe_hotel/7naylon_poşet.png' },
    
    // Medical items
    { id: 'm1', category: 'medical', name: 'Tıbbi Ambalaj Kağıdı', link: '/medical', image: '/restaurant_cafe_hotel/6kese_kağıdı.png' },
    { id: 'm2', category: 'medical', name: 'Medikal Mukavva Kutu', link: '/medical', image: '/restaurant_cafe_hotel/11mukavva.png' },
    { id: 'm3', category: 'medical', name: 'Temizlik Ürünleri', link: '/medical', image: '/restaurant_cafe_hotel/15temizlikürün.png' },
    { id: 'm4', category: 'medical', name: 'Ürün Ambalajı', link: '/medical', image: '/restaurant_cafe_hotel/14ürünambalaj.png' },
    { id: 'm5', category: 'medical', name: 'Tıbbi Poşetler', link: '/medical', image: '/restaurant_cafe_hotel/7naylon_poşet.png' },
    { id: 'm6', category: 'medical', name: 'Steril Çanta', link: '/medical', image: '/restaurant_cafe_hotel/5kagıt_canta.png' },
    
    // Industrial items
    { id: 'i1', category: 'industrial', name: 'Endüstriyel Ambalaj Kağıdı', link: '/industry', image: '/restaurant_cafe_hotel/6kese_kağıdı.png' },
    { id: 'i2', category: 'industrial', name: 'Sanayi Mukavva Kutu', link: '/industry', image: '/restaurant_cafe_hotel/11mukavva.png' },
    { id: 'i3', category: 'industrial', name: 'Endüstriyel Temizlik', link: '/industry', image: '/restaurant_cafe_hotel/15temizlikürün.png' },
    { id: 'i4', category: 'industrial', name: 'Sanayi Ürün Ambalajı', link: '/industry', image: '/restaurant_cafe_hotel/14ürünambalaj.png' },
    { id: 'i5', category: 'industrial', name: 'İş Güvenliği Poşetler', link: '/industry', image: '/restaurant_cafe_hotel/7naylon_poşet.png' },
    { id: 'i6', category: 'industrial', name: 'Endüstriyel Çantalar', link: '/industry', image: '/restaurant_cafe_hotel/5kagıt_canta.png' },
  ];

  const categoryDescriptions: Record<string, string> = {
    restaurant: 'Restoranlar için özel olarak tasarlanmış ambalaj çözümleri sunuyoruz. Islak mendillerden toz şeker ambalajlarına, kağıt çantalardan naylon poşetlere kadar, müşterilerinize kaliteli hizmet sunmanıza yardımcı oluyoruz.',
    cafe: 'Kafeler için modern ve işlevsel ambalaj ürünleri ile markanızı ön plana çıkarın. Pipet ambalajlarından peçetelere ve mukavva kutulardan şeker ambalajlarına kadar her ihtiyacınızı karşılıyoruz.',
    hotel: 'Oteller için profesyonel ambalaj çözümleri ile misafirlerinize konforlu bir deneyim sunun. Otel islak mendillerinden oda servisi çantalarına ve minibar şekerlerinden oda peçetelerine kadar her şeyi sağlıyoruz.',
    official: 'Resmi kurumlar için güvenilir ve profesyonel ambalaj hizmetleri. Kurumsal çantalardan ofis şekerlerine ve resmi peçetelerden kurum kutularına kadar kurumsal kimliğinizi güçlendirin.',
    medical: 'Medikal sektör için hijyenik ve dayanıklı ambalaj çözümleri. Tıbbi ambalaj kağıdından medikal mukavva kutularına ve temizlik ürünlerinden steril çantalara kadar sağlık hizmetlerinizi destekliyoruz.',
    industrial: 'Endüstriyel ortamlar için sağlam ve işlevsel ambalaj ürünleri. Endüstriyel ambalaj kağıdından sanayi mukavva kutularına ve iş güvenliği poşetlerinden endüstriyel çantalara kadar operasyonlarınızı destekliyoruz.',
  };

  const filteredItems = contentItems.filter(item => item.category === activeCategory);
  const categoryLink = contentItems.find(item => item.category === activeCategory)?.link || '/';

  // Placeholder SVG as base64
  const placeholderSVG = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRTVFN0VCIi8+CjxwYXRoIGQ9Ik0xNzUgMTEwSDIyNUMyMzAuNTIzIDExMCAyMzUgMTE0LjQ3NyAyMzUgMTIwVjE4MEMyMzUgMTg1LjUyMyAyMzAuNTIzIDE5MCAyMjUgMTkwSDE3NUMxNjkuNDc3IDE5MCAxNjUgMTg1LjUyMyAxNjUgMTgwVjEyMEMxNjUgMTE0LjQ3NyAxNjkuNDc3IDExMCAxNzUgMTEwWiIgc3Ryb2tlPSIjOUNBM0FGIiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iMTg1IiBjeT0iMTMwIiByPSI3IiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0xNjUgMTcwTDE4NSAxNTBMMjA1IDE3MEwyMjUgMTUwTDIzNSAxNjAiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+';

  return (
    <>
      <div 
        id="category-cards" 
        className="category-cards bg-white -mt-4 sm:-mt-12 md:-mt-8 pt-1 md:pt-12 lg:pt-4 relative z-10"  
        data-section="category-cards"
      >
        <h2 className="text-center text-1xl md:text-2xl font-bold mb-4">
          Sektörünüzü seçerek ihtiyacınız olabilecek ürünleri keşfedin
        </h2>
        
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-12 lg:gap-4 max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => handleCategoryNavigation(category.id)}
                  className={`relative p-none bg-white rounded-none shadow-sm border-2 ${
                    activeCategory === category.id
                      ? 'border-orange-500 bg-orange-100'
                      : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={`Select ${category.name} category`}
                >
                  <div className="flex flex-col items-center space-y-none">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-24 lg:h-24 xl:w-38 xl:h-38 bg-gray-200 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          const img = e.currentTarget;
                          if (!img.dataset.error) {
                            img.dataset.error = 'true';
                            img.src = placeholderSVG;
                            img.style.objectFit = 'contain';
                            img.style.padding = '20px';
                          }
                        }}
                      />
                    </div>

                    <div className="text-xs font-semibold text-center text-gray-800 p-2">
                      {category.name}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Category heading and description moved here - under category cards */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-25 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {categories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            <p className="text-gray-600 mb-6">
              {categoryDescriptions[activeCategory]}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <AnimatePresence mode="wait">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                  >
                    <Link href={item.link} className="block h-full">
                      <div className="bg-gray-50 h-full flex flex-col border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative w-full aspect-[4/3] bg-gray-200">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            loading={index < 6 ? "eager" : "lazy"}
                            onError={(e) => {
                              const img = e.currentTarget;
                              if (!img.dataset.error) {
                                img.dataset.error = 'true';
                                img.src = placeholderSVG;
                                img.style.objectFit = 'contain';
                                img.style.padding = '20px';
                              }
                            }}
                          />
                        </div>
                        <div className="p-4 flex flex-col items-center justify-center text-center">
                          <h3 className="text-sm font-bold text-gray-800">{item.name}</h3>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {/* Button stays here at the bottom after product grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-25 text-center"
            >
              <Link href={categoryLink}>
                <button
                  className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                  aria-label={`View more ${activeCategory} products`}
                >
                  Daha Fazla Gör
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCards;
