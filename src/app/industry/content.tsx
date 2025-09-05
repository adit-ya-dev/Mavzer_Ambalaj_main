import React, { useState, useEffect } from 'react';

export default function Content() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const medicalItems = [
    {
      name: "AMBALAJ KAĞIDI",
      count: "Firma Özel Tasarım",
      image: "/restaurant_cafe_hotel/6kese_kağıdı.png",
      description: "Endüstriyel ambalajlama için dayanıklı ve güvenilir kağıt çözümleri. Ürün koruması ve lojistik süreçler için ideal."
    },
    {
      name: "MUKAVVA KUTU",
      count: "Firma Özel Tasarım",
      image: "/restaurant_cafe_hotel/11mukavva.png",
      description: "Sağlam mukavva kutular. Sanayi tesislerinde depolama ve nakliye için dayanıklı ambalaj çözümü."
    },
    {
      name: "ÜRÜN AMBALAJI",
      count: "Firma Özel Tasarım",
      image: "/restaurant_cafe_hotel/14ürünambalaj.png",
      description: "Özel tasarım ürün ambalajları. Sanayi ürünleri için koruyucu ve profesyonel ambalaj çözümleri."
    },
    {
      name: "TEMİZLİK ÜRÜNLERİ",
      count: "Firma Özel Tasarım",
      image: "/restaurant_cafe_hotel/15temizlikürün.png",
      description: "Endüstriyel temizlik ürünleri. Sanayi tesisleri için hijyen ve temizlik standartlarını karşılar."
    }
  ];

  const handleOrderNow = () => {
    setTimeout(() => {
      const element = document.getElementById('contact-form-section');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start'
        });
      } else {
        window.scrollTo({ 
          top: document.body.scrollHeight, 
          behavior: 'smooth' 
        });
      }
    }, 100);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Image failed to load:', e.currentTarget.src);
    e.currentTarget.style.display = 'none';
    const svgContainer = e.currentTarget.nextElementSibling;
    if (svgContainer) {
      (svgContainer as HTMLElement).style.display = 'block';
    }
  };

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#111827',
      padding: isMobile ? '16px 8px' : '32px 16px'
    }}>
      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: isMobile ? '24px' : '48px',
          padding: '0 8px'
        }}>
          <h1 style={{ 
            fontSize: isMobile ? '28px' : '36px', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '16px',
            lineHeight: '1.2'
          }}>
            SANAYİ MALZEMELERİ
          </h1>
          <p style={{ 
            fontSize: isMobile ? '16px' : '20px', 
            color: '#d1d5db',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            Sanayi tesisleri için çok sayıda malzemeye ihtiyacınız olacak!
          </p>
        </div>
        
        {/* Cards Grid */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: isMobile ? '16px' : '24px',
          marginBottom: isMobile ? '32px' : '48px',
          padding: '0 4px'
        }}>
          {medicalItems.map((item, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: '#1f2937',
                borderRadius: '12px',
                padding: isMobile ? '16px' : '24px',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'center',
                gap: isMobile ? '16px' : '24px',
                minHeight: 'auto',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                width: '100%'
              }}
            >
              {/* Image Container */}
              <div 
                onClick={() => openImageModal(item.image)}
                style={{
                  width: isMobile ? '100%' : '320px',
                  height: isMobile ? '200px' : '220px',
                  backgroundColor: '#374151',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  flexShrink: 0,
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <img 
                  src={item.image} 
                  alt={`${item.name} ${item.description || ''}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={handleImageError}
                />
                {/* Fallback SVG (hidden by default) */}
                <div style={{ display: 'none', position: 'absolute' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
              
              {/* Content Container */}
              <div style={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                paddingLeft: isMobile ? '0' : '8px',
                textAlign: isMobile ? 'center' : 'left',
                width: '100%'
              }}>
                {/* Heading */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}>
                  <h3 style={{ 
                    fontWeight: 'bold',
                    fontSize: isMobile ? '20px' : '24px',
                    color: 'white',
                    margin: '0',
                    letterSpacing: '0.02em',
                    lineHeight: '1.2'
                  }}>
                    {item.name}
                  </h3>
                  {item.description && (
                    <span style={{
                      fontSize: isMobile ? '14px' : '16px',
                      color: '#9ca3af',
                      fontWeight: 'normal',
                      lineHeight: '1.3'
                    }}>
                      {item.description}
                    </span>
                  )}
                </div>
                
                {/* Subtitle */}
                <div style={{
                  display: 'inline-block',
                  backgroundColor: '#1e3a8a',
                  color: 'white',
                  padding: isMobile ? '8px 16px' : '6px 16px',
                  borderRadius: '20px',
                  fontSize: isMobile ? '12px' : '14px',
                  fontWeight: '600',
                  alignSelf: isMobile ? 'center' : 'flex-start',
                  whiteSpace: 'nowrap'
                }}>
                  {item.count}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Now Button */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '32px',
          padding: '0 16px'
        }}>
          <button
            onClick={handleOrderNow}
            style={{
              position: 'relative',
              padding: isMobile ? '14px 32px' : '16px 48px',
              background: 'linear-gradient(90deg, #ea580c 0%, #f97316 50%, #fb923c 100%)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: isMobile ? '16px' : '18px',
              borderRadius: '16px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 40px rgba(249, 115, 22, 0.25)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              width: isMobile ? '100%' : 'auto',
              justifyContent: 'center',
              maxWidth: isMobile ? '300px' : 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
            }}
          >
            <svg width={isMobile ? "20" : "24"} height={isMobile ? "20" : "24"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span>TEKLİF AL</span>
            <svg width={isMobile ? "18" : "20"} height={isMobile ? "18" : "20"} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{
              transition: 'transform 0.3s ease'
            }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          onClick={closeImageModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer',
            padding: isMobile ? '16px' : '20px'
          }}
        >
          <div style={{
            position: 'relative',
            maxWidth: isMobile ? '95vw' : '70vw',
            maxHeight: isMobile ? '85vh' : '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src={selectedImage}
              alt="Enlarged view"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
              }}
              onClick={(e) => e.stopPropagation()}
            />
            {/* Close button */}
            <button
              onClick={closeImageModal}
              style={{
                position: 'absolute',
                top: isMobile ? '5px' : '10px',
                right: isMobile ? '5px' : '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: isMobile ? '36px' : '40px',
                height: isMobile ? '36px' : '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: isMobile ? '18px' : '20px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}