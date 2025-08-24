export default function Content() {
  const medicalItems = [
    {
      name: "AMBALAJ",
      description: "KAĞIDI",
      count: "Firma Özel Tasarım",
      image: "/restaurant_cafe_hotel/6kese_kağıdı.png"
    },
    {
      name: "MUKAVVA",
      description: "KUTU",
      count: "Firma Özel Tasarım",
      image: "/restaurant_cafe_hotel/11mukavva.png"
    },
    {
      name: "ÜRÜN",
      description: "AMBALAJ",
      count: "Firma Özel Tasarım",
      image: "/restaurant_cafe_hotel/14ürünambalaj.png"
    },
    {
      name: "TEMİZLİK",
      description: "ÜRÜNLERİ",
      count: "Firma Özel Tasarım",
      image: "/restaurant_cafe_hotel/15temizlikürün.png"
    },
    
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
        // Fallback scroll to bottom
        window.scrollTo({ 
          top: document.body.scrollHeight, 
          behavior: 'smooth' 
        });
      }
    }, 100);
  };

  const handleImageError = (e: any ) => {
    console.error('Image failed to load:', e.target.src);
    // Instead of replacing innerHTML, we'll hide the image and show SVG
    e.target.style.display = 'none';
    const svgContainer = e.target.nextElementSibling;
    if (svgContainer) {
      svgContainer.style.display = 'block';
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#111827',
      padding: '32px 16px'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '16px'
          }}>
            TIBBİ MALZEMELER
          </h1>
          <p style={{ 
            fontSize: '20px', 
            color: '#d1d5db'
          }}>
            Hastaneler ve klinikler için çok sayıda tıbbi malzemeye ihtiyacınız olacak!
          </p>
        </div>
        
        {/* Cards Grid */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {medicalItems.map((item, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: '#1f2937',
                borderRadius: '16px',
                padding: '16px',
                transition: 'background-color 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#374151';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1f2937';
              }}
            >
              {/* Card Header */}
              <div style={{ 
                paddingBottom: '0',
                paddingTop: '8px',
                paddingLeft: '16px',
                paddingRight: '16px',
                marginBottom: '8px'
              }}>
                <h4 style={{ 
                  fontWeight: 'bold',
                  fontSize: '20px',
                  color: 'white',
                  textAlign: 'center',
                  margin: '0'
                }}>
                  {item.name} {item.description}
                </h4>
              </div>
              
              {/* Card Body */}
              <div style={{
                padding: '0 8px 8px 8px',
                overflow: 'visible'
              }}>
                <div style={{
                  width: '100%',
                  height: '220px',
                  backgroundColor: '#374151',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={item.image} 
                    alt={`${item.name} ${item.description}`}
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
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Now Button - Centered */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '32px'
        }}>
          <button
            onClick={handleOrderNow}
            style={{
              position: 'relative',
              padding: '16px 48px',
              background: 'linear-gradient(90deg, #ea580c 0%, #f97316 50%, #fb923c 100%)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px',
              borderRadius: '16px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 40px rgba(249, 115, 22, 0.25)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
            }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span>TEKLİF AL</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{
              transition: 'transform 0.3s ease'
            }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}