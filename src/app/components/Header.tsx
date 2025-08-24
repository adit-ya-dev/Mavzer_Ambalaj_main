"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const handleHizmetlerClick = () => {
    setDropdownOpen(false);
    setSidebarOpen(false);

    // Check if we're on homepage
    const isHomepage = window.location.pathname === '/';
    
    if (isHomepage) {
      // On homepage - scroll to category cards
      setTimeout(() => {
        const element = document.getElementById('category-cards');
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
          });
        } else {
          // Fallback scroll
          window.scrollTo({ 
            top: 600, 
            behavior: 'smooth' 
          });
        }
      }, 100);
    } else {
      // Not on homepage - go to homepage and scroll
      router.push('/?scroll=category');
    }
  };

  const handleReferanslarClick = () => {
    setDropdownOpen(false);
    setSidebarOpen(false);
    
    const isHomepage = window.location.pathname === '/';
    
    if (isHomepage) {
      setTimeout(() => {
        const element = document.getElementById('references-section');
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
          });
        } else {
          // Fallback scroll position
          window.scrollTo({ 
            top: 1600, 
            behavior: 'smooth' 
          });
        }
      }, 100);
    } else {
      router.push('/?scroll=references');
    }
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-md relative z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-20">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors mr-4"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between w-full">
              {/* Left Navigation */}
              <nav className="flex items-center space-x-8 flex-1 justify-end">
                <Link
                  href="/corporate"
                  className="text-sm font-semibold text-gray-700 hover:text-[#D71F28] transition-colors whitespace-nowrap"
                >
                  KURUMSAL
                </Link>
                <button
                  onClick={handleHizmetlerClick}
                  className="text-sm font-semibold text-gray-700 hover:text-[#D71F28] transition-colors whitespace-nowrap hover:scale-105 transform transition-all duration-200"
                >
                  HİZMETLER
                </button>
                <Link
                  href="/production"
                  className="text-sm font-semibold text-gray-700 hover:text-[#D71F28] transition-colors whitespace-nowrap"
                >
                  ÜRETİM
                </Link>
              </nav>
              
              {/* Logo in center */}
              <div className="flex-shrink-0 px-10">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  <img
                    src="/logo.png"
                    alt="Mavzer Logo"
                    className="h-20 w-auto object-contain cursor-pointer"
                  />
                </Link>
              </div>
              
              {/* Right Navigation */}
              <nav className="flex items-center space-x-8 flex-1 justify-start">
                <button
                  onClick={handleReferanslarClick}
                  className="text-sm font-semibold text-gray-700 hover:text-[#D71F28] transition-colors whitespace-nowrap"
                >
                  REFERANSLAR
                </button>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-gray-700 hover:text-[#D71F28] transition-colors whitespace-nowrap"
                >
                  İLETİŞİM
                </Link>
                
                {/* Dropdown Menu */}
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="p-3 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md text-sm font-semibold text-gray-700"
                  >
                    MENÜ
                  </button>
                  
                  {dropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden flex flex-col" style={{ maxHeight: '600px' }}>
                      <div className="flex-1 overflow-y-auto">
                        <div className="py-2">
                          <Link
                            href="/"
                            onClick={() => setDropdownOpen(false)}
                            className="w-full text-left block px-5 py-3 text-gray-800 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition-all duration-200 font-medium text-sm border-b border-gray-100"
                          >
                            ANA SAYFA
                          </Link>
                          <div className="border-b border-gray-100">
                            <div className="w-full text-left block px-5 py-3 text-gray-800 font-medium text-sm bg-gray-50">
                              MAVZER AMBALAJ
                            </div>
                            <div className="bg-gray-50 py-1">
                              <Link
                                href="/corporate"
                                onClick={() => setDropdownOpen(false)}
                                className="w-full text-left block px-8 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white transition-all duration-200"
                              >
                                • Kurumsal
                              </Link>
                              <Link
                                href="/production"
                                onClick={() => setDropdownOpen(false)}
                                className="w-full text-left block px-8 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white transition-all duration-200"
                              >
                                • Üretim
                              </Link>
                              <button
                                onClick={handleReferanslarClick}
                                className="w-full text-left block px-8 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white transition-all duration-200"
                              >
                                • Referanslar
                              </button>
                              <Link
                                href="/contact"
                                onClick={() => setDropdownOpen(false)}
                                className="w-full text-left block px-8 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white transition-all duration-200"
                              >
                                • İletişim
                              </Link>
                            </div>
                          </div>
                          
                          {/* Categories Section */}
                          <div className="border-b border-gray-100">
                            <div className="w-full text-left block px-5 py-3 text-gray-800 font-medium text-sm bg-gray-50">
                              KATEGORİLER
                            </div>
                            <div className="bg-gray-50 py-1">
                              <Link
                                href="/cafe"
                                onClick={() => setDropdownOpen(false)}
                                className="w-full text-left block px-8 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white transition-all duration-200"
                              >
                                • Kafe
                              </Link>
                              <Link
                                href="/hotel"
                                onClick={() => setDropdownOpen(false)}
                                className="w-full text-left block px-8 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white transition-all duration-200"
                              >
                                • Otel
                              </Link>
                              <Link
                                href="/restaurant"
                                onClick={() => setDropdownOpen(false)}
                                className="w-full text-left block px-8 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white transition-all duration-200"
                              >
                                • Restoran
                              </Link>
                              <Link
                                href="/industry"
                                onClick={() => setDropdownOpen(false)}
                                className="w-full text-left block px-8 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white transition-all duration-200"
                              >
                                • Endüstri
                              </Link>
                              <Link
                                href="/institution"
                                onClick={() => setDropdownOpen(false)}
                                className="w-full text-left block px-8 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white transition-all duration-200"
                              >
                                • Kurum
                              </Link>
                              <Link
                                href="/medical"
                                onClick={() => setDropdownOpen(false)}
                                className="w-full text-left block px-8 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white transition-all duration-200"
                              >
                                • Medikal
                              </Link>
                            </div>
                          </div>
                          
                          {/* Policy & Information Section */}
                          <div className="border-b border-gray-100">
                            <div className="w-full text-left block px-5 py-3 text-gray-800 font-medium text-sm bg-gray-50">
                              BİLGİLENDİRME VE POLİTİKALAR
                            </div>
                            <div className="bg-gray-50 py-1">
                              <Link
                                href="/information-society-service"
                                onClick={() => setDropdownOpen(false)}
                                className="w-full text-left block px-8 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white transition-all duration-200"
                              >
                                • Bilgi Toplumu Hizmeti
                              </Link>
                              <Link
                                href="/social-responsibility"
                                onClick={() => setDropdownOpen(false)}
                                className="w-full text-left block px-8 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white transition-all duration-200"
                              >
                                • Sosyal Sorumluluk
                              </Link>
                              <Link
                                href="/cookie-policy"
                                onClick={() => setDropdownOpen(false)}
                                className="w-full text-left block px-8 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white transition-all duration-200"
                              >
                                • Çerez Politikası
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Footer section */}
                      <div className="flex-shrink-0 border-t-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5">
                        <h3 className="font-bold text-gray-900 text-base mb-2">Mavzer Ambalaj</h3>
                        <p className="text-xs text-gray-600 leading-relaxed mb-3">
                          Mavzer Pazarlama Baskı Ambalaj Gıda Kimya Sanayi ve Ticaret Ltd. Şti.
                        </p>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-sm text-gray-700">0312 397 3935</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-sm text-gray-700">0533 681 9127</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* Mobile Logo */}
            <div className="md:hidden flex items-center justify-center w-full">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <img
                  src="/logo.png"
                  alt="Mavzer Logo"
                  className="h-12 w-auto object-contain cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto transition-transform transform translate-x-0">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-10 h-10 rounded object-contain"
                />
                <span className="font-semibold text-gray-800">Navigasyon</span>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 py-4">
              <div className="px-4 mb-6">
                <button
                  onClick={handleHizmetlerClick}
                  className="w-full text-left block py-3 px-4 text-gray-800 font-semibold hover:bg-gray-100 rounded-md transition-colors hover:scale-105 transform transition-all duration-200"
                >
                  HİZMETLER
                </button>
              </div>
              <div className="px-4 mb-6">
                <h3 className="text-lg font-bold text-[#D71F28] mb-3 px-4">
                  MAVZER AMBALAJ
                </h3>
                <div className="space-y-1">
                  <Link
                    href="/corporate"
                    onClick={closeSidebar}
                    className="w-full text-left block py-2 px-8 text-gray-700 hover:bg-gray-100 hover:text-[#D71F28] rounded-md transition-colors"
                  >
                    1. Kurumsal
                  </Link>
                  <Link
                    href="/production"
                    onClick={closeSidebar}
                    className="w-full text-left block py-2 px-8 text-gray-700 hover:bg-gray-100 hover:text-[#D71F28] rounded-md transition-colors"
                  >
                    2. Üretim
                  </Link>
                  <button
                    onClick={handleReferanslarClick}
                    className="w-full text-left block py-2 px-8 text-gray-700 hover:bg-gray-100 hover:text-[#D71F28] rounded-md transition-colors"
                  >
                    3. Referanslar
                  </button>
                  <Link
                    href="/contact"
                    onClick={closeSidebar}
                    className="w-full text-left block py-2 px-8 text-gray-700 hover:bg-gray-100 hover:text-[#D71F28] rounded-md transition-colors"
                  >
                    4. İletişim
                  </Link>
                </div>
              </div>
              
              {/* Category Links in Sidebar */}
              <div className="px-4 mb-6">
                <h3 className="text-lg font-bold text-[#D71F28] mb-3 px-4">
                  KATEGORİLER
                </h3>
                <div className="space-y-1">
                  <Link
                    href="/cafe"
                    onClick={closeSidebar}
                    className="w-full text-left block py-2 px-8 text-gray-700 hover:bg-gray-100 hover:text-[#D71F28] rounded-md transition-colors"
                  >
                    • Kafe
                  </Link>
                  <Link
                    href="/hotel"
                    onClick={closeSidebar}
                    className="w-full text-left block py-2 px-8 text-gray-700 hover:bg-gray-100 hover:text-[#D71F28] rounded-md transition-colors"
                  >
                    • Otel
                  </Link>
                  <Link
                    href="/restaurant"
                    onClick={closeSidebar}
                    className="w-full text-left block py-2 px-8 text-gray-700 hover:bg-gray-100 hover:text-[#D71F28] rounded-md transition-colors"
                  >
                    • Restoran
                  </Link>
                  <Link
                    href="/industry"
                    onClick={closeSidebar}
                    className="w-full text-left block py-2 px-8 text-gray-700 hover:bg-gray-100 hover:text-[#D71F28] rounded-md transition-colors"
                  >
                    • Endüstri
                  </Link>
                  <Link
                    href="/institution"
                    onClick={closeSidebar}
                    className="w-full text-left block py-2 px-8 text-gray-700 hover:bg-gray-100 hover:text-[#D71F28] rounded-md transition-colors"
                  >
                    • Kurum
                  </Link>
                  <Link
                    href="/medical"
                    onClick={closeSidebar}
                    className="w-full text-left block py-2 px-8 text-gray-700 hover:bg-gray-100 hover:text-[#D71F28] rounded-md transition-colors"
                  >
                    • Medikal
                  </Link>
                </div>
              </div>
              
              {/* Policy & Information Section in Sidebar */}
              <div className="px-4 mb-6">
                <h3 className="text-lg font-bold text-[#D71F28] mb-3 px-4">
                  BİLGİLENDİRME VE POLİTİKALAR
                </h3>
                <div className="space-y-1">
                  <Link
                    href="/information-society-service"
                    onClick={closeSidebar}
                    className="w-full text-left block py-2 px-8 text-gray-700 hover:bg-gray-100 hover:text-[#D71F28] rounded-md transition-colors"
                  >
                    • Bilgi Toplumu Hizmeti
                  </Link>
                  <Link
                    href="/social-responsibility"
                    onClick={closeSidebar}
                    className="w-full text-left block py-2 px-8 text-gray-700 hover:bg-gray-100 hover:text-[#D71F28] rounded-md transition-colors"
                  >
                    • Sosyal Sorumluluk
                  </Link>
                  <Link
                    href="/cookie-policy"
                    onClick={closeSidebar}
                    className="w-full text-left block py-2 px-8 text-gray-700 hover:bg-gray-100 hover:text-[#D71F28] rounded-md transition-colors"
                  >
                    • Çerez Politikası
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Sidebar Footer */}
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="text-center">
                <h4 className="font-bold text-[#D71F28] mb-2">Mavzer Ambalaj</h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Mavzer Pazarlama Baskı Ambalaj Gıda Kimya Sanayi ve Ticaret Ltd. Şti.
                </p>
                <div className="space-y-1 text-sm font-semibold text-[#272B87]">
                  <div>0312 397 3935</div>
                  <div>0533 681 9127</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;