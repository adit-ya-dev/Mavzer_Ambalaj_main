"use client";
import React, { useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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

const CategoryCards: React.FC<CategoryCardsProps> = React.memo(({
  activeCategory,
  setActiveCategory,
  setDropdownOpen,
  setSidebarOpen,
}) => {
  const router = useRouter();

  const handleCategoryNavigation = useCallback((categoryId: string) => {
    if (setDropdownOpen) setDropdownOpen(false);
    if (setSidebarOpen) setSidebarOpen(false);
    setActiveCategory(categoryId);

    const isHomepage = window.location.pathname === '/';
    if (isHomepage) {
      setTimeout(() => {
        const element = document.getElementById('category-cards-cards');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 9000, behavior: 'smooth' });
        }
      }, 100);
    } else {
      router.push(`/?scroll=category&category=${categoryId}`);
    }
  }, [setActiveCategory, setDropdownOpen, setSidebarOpen, router]);

  const categories: Category[] = useMemo(() => [
    { id: 'restaurant', name: 'Restoran', image: '/catagory/restaurant.jpg' },
    { id: 'cafe', name: 'Kafe', image: '/catagory/cafe.jpg' },
    { id: 'hotel', name: 'Otel', image: '/catagory/hotel.jpg' },
    { id: 'official', name: 'Resmi Kurum', image: '/catagory/institution.jpg' },
    { id: 'medical', name: 'Medikal', image: '/catagory/medical.jpg' },
    { id: 'industrial', name: 'Endüstriyel', image: '/catagory/industries.jpg' },
  ], []);

  const contentItems: ContentItem[] = useMemo(() => [
    { id: 'r1', category: 'restaurant', name: 'Islak Mendil Ambalajları', link: '/restaurant', image: '/restaurant_cafe_hotel/ıslakmendil.png' },
    { id: 'r2', category: 'restaurant', name: 'Toz Şeker Ambalajı', link: '/restaurant', image: '/restaurant_cafe_hotel/3tozşeker.png' },
    { id: 'r3', category: 'restaurant', name: 'Çorba Kaseleri', link: '/restaurant', image: '/restaurant_cafe_hotel/4çorba_kase.png' },
    { id: 'r4', category: 'restaurant', name: 'Kağıt Çanta', link: '/restaurant', image: '/restaurant_cafe_hotel/5kagıt_canta.png' },
    { id: 'r5', category: 'restaurant', name: 'Ambalaj Kağıdı', link: '/restaurant', image: '/restaurant_cafe_hotel/6kese_kağıdı.png' },
    { id: 'c1', category: 'cafe', name: 'Pipet Ambalajı', link: '/cafe', image: '/restaurant_cafe_hotel/8pipet_ambalaj.png' },
    { id: 'c2', category: 'cafe', name: 'Peçete', link: '/cafe', image: '/restaurant_cafe_hotel/10peçete.png' },
    { id: 'c3', category: 'cafe', name: 'Mukavva Kutu', link: '/cafe', image: '/restaurant_cafe_hotel/11mukavva.png' },
    { id: 'c4', category: 'cafe', name: 'Karton Kutular', link: '/cafe', image: '/restaurant_cafe_hotel/carton_kutular.jpg' },
    { id: 'c5', category: 'cafe', name: 'Şeker Ambalajı', link: '/cafe', image: '/restaurant_cafe_hotel/3tozşeker.png' },
    { id: 'h1', category: 'hotel', name: 'Otel Islak Mendilleri', link: '/hotel', image: '/restaurant_cafe_hotel/ıslakmendil.png' },
    { id: 'h2', category: 'hotel', name: 'Oda Servisi Çanta', link: '/hotel', image: '/restaurant_cafe_hotel/5kagıt_canta.png' },
    { id: 'h3', category: 'hotel', name: 'Minibar Şekerleri', link: '/hotel', image: '/restaurant_cafe_hotel/3tozşeker.png' },
    { id: 'h4', category: 'hotel', name: 'Oda Peçeteleri', link: '/hotel', image: '/restaurant_cafe_hotel/10peçete.png' },
    { id: 'h5', category: 'hotel', name: 'Servis Kutuları', link: '/hotel', image: '/restaurant_cafe_hotel/11mukavva.png' },
    { id: 'o1', category: 'official', name: 'Resmi Islak Mendil', link: '/institution', image: '/restaurant_cafe_hotel/ıslakmendil.png' },
    { id: 'o2', category: 'official', name: 'Kurumsal Çantalar', link: '/institution', image: '/restaurant_cafe_hotel/5kagıt_canta.png' },
    { id: 'o3', category: 'official', name: 'Ofis Şekerleri', link: '/institution', image: '/restaurant_cafe_hotel/3tozşeker.png' },
    { id: 'o4', category: 'official', name: 'Resmi Peçeteler', link: '/institution', image: '/restaurant_cafe_hotel/10peçete.png' },
    { id: 'o5', category: 'official', name: 'Kurum Kutuları', link: '/institution', image: '/restaurant_cafe_hotel/11mukavva.png' },
    { id: 'm1', category: 'medical', name: 'Tıbbi Ambalaj Kağıdı', link: '/medical', image: '/restaurant_cafe_hotel/6kese_kağıdı.png' },
    { id: 'm2', category: 'medical', name: 'Medikal Mukavva Kutu', link: '/medical', image: '/restaurant_cafe_hotel/11mukavva.png' },
    { id: 'm3', category: 'medical', name: 'Temizlik Ürünleri', link: '/medical', image: '/restaurant_cafe_hotel/15temizlikürün.png' },
    { id: 'm4', category: 'medical', name: 'Ürün Ambalajı', link: '/medical', image: '/restaurant_cafe_hotel/14ürünambalaj.png' },
    { id: 'm5', category: 'medical', name: 'Tıbbi Poşetler', link: '/medical', image: '/restaurant_cafe_hotel/7naylon_poşet.png' },
    { id: 'i1', category: 'industrial', name: 'Endüstriyel Ambalaj Kağıdı', link: '/industry', image: '/restaurant_cafe_hotel/6kese_kağıdı.png' },
    { id: 'i2', category: 'industrial', name: 'Sanayi Mukavva Kutu', link: '/industry', image: '/restaurant_cafe_hotel/11mukavva.png' },
    { id: 'i3', category: 'industrial', name: 'Endüstriyel Temizlik', link: '/industry', image: '/restaurant_cafe_hotel/15temizlikürün.png' },
    { id: 'i4', category: 'industrial', name: 'Sanayi Ürün Ambalajı', link: '/industry', image: '/restaurant_cafe_hotel/14ürünambalaj.png' },
    { id: 'i5', category: 'industrial', name: 'İş Güvenliği Poşetler', link: '/industry', image: '/restaurant_cafe_hotel/7naylon_poşet.png' },
  ], []);

  const filteredItems = useMemo(() => contentItems.filter(
    (item) => item.category === activeCategory
  ), [activeCategory, contentItems]);

  const categoryLink = useMemo(() =>
    contentItems.find((item) => item.category === activeCategory)?.link || '/',
  [activeCategory, contentItems]);

  const placeholderSVG = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRTVFN0VCIi8+CjxwYXRoIGQ9Ik0xNzUgMTEwSDIyNUMyMzAuNTIzIDExMCAyMzUgMTE0LjQ3NyAyMzUgMTIwVjE4MEMyMzUgMTg1LjUyMyAyMzAuNTIzIDE5MCAyMjUgMTkwSDE3NVMxNjkuNDc3IDE5MCAxNjUgMTg1LjUyMyAxNjUgMTgwVjEyMFMxNjkuNDc3IDExMCAxNzUgMTEwWiIgc3Ryb2tlPSIjOUNBM0FGIiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iMTg1IiBjeT0iMTMwIiByPSI3IiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0xNjUgMTcwTDE4NSAxNTBMMjA1IDE3MEwyMjUgMTUwTDIzNSAxNjAiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+';

  return (
    <>
      <section
        id="category-cards"
        className="category-cards bg-white -mt-4 sm:-mt-1 md:-mt-8 pt-1 md:pt-12 lg:pt-4 relative z-10"
        data-section="category-cards"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="max-w-auto mx-auto px-2 sm:px-2 md:px-6 lg:px-0">
              <div className="text-center mb-4">
                <div className="relative w-full h-24 sm:h-24 md:h-32 lg:h-36 xl:h-40 bg-gray-100 overflow-hidden shadow-sm">
                  <img
                    src="/banner.png"
                    alt="Söyle Kazan - Hızlı Teslimat'la 2 Sipariş Ver"
                    className="w-full h-full object-contain"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="category-cards-cards" className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-auto mx-auto px-2 sm:px-2 md:px-6 lg:px-0">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => handleCategoryNavigation(category.id)}
                  className={`relative p-none bg-white rounded-none shadow-sm border-2 min-w-[96px] min-h-[96px] ${
                    activeCategory === category.id
                      ? 'border-orange-500 bg-orange-100'
                      : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={`Select ${category.name} category`}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col items-center space-y-none">
                    <div className="relative w-24 h-24 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-50 xl:h-50 bg-gray-200 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover object-center"
                        loading="eager"
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
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    layout
                  >
                    <Link href={item.link} className="block h-full">
                      <div className="bg-gray-50 h-full flex flex-col border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
                        <div className="relative w-full aspect-[4/3] bg-gray-200">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            loading={index < 6 ? 'eager' : 'lazy'}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-12 text-center"
            >
              <Link href={categoryLink}>
                <button
                  className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
                  aria-label={`View more ${activeCategory} products`}
                >
                  Daha Fazla Gör
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
});

export default CategoryCards;