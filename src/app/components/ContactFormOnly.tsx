"use client";
import React, { useState, useEffect } from "react";

export default function ContactFormOnly() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", phone: "", message: "" };

    // Name validation: min 2 characters
    if (formData.name.length < 2) {
      newErrors.name = "Ad Soyad en az 2 karakter olmalıdır.";
      isValid = false;
    }

    // Email validation: basic email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta adresi giriniz.";
      isValid = false;
    }

    // Phone validation: min 10 digits (allowing spaces, dashes)
    const phoneDigits = formData.phone.replace(/[\s-]/g, "");
    if (phoneDigits.length < 10 || !/^\d+$/.test(phoneDigits)) {
      newErrors.phone = "Telefon numarası en az 10 rakam olmalıdır.";
      isValid = false;
    }

    // Message validation: min 10 characters
    if (formData.message.length < 10) {
      newErrors.message = "Mesaj en az 10 karakter olmalıdır.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for the field being edited
    setErrors({
      ...errors,
      [e.target.name]: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          // Add timestamp for tracking
          timestamp: new Date().toISOString(),
          // Add your email as recipient
          recipient: 'aditsingh8077@gmail.com'
        }),
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        console.log("Form submitted successfully:", formData);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed:", result.error || 'Unknown error');
        // You can add error handling UI here if needed
        alert("Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Ağ hatası. Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Hide success message after 5 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <div id="contact-form-section" className="bg-white py-10 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center max-w-7xl mx-auto">
          
          {/* Contact Form - Centered */}
          <div className="max-w-2xl w-full">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Bize Ulaşın
              </h3>
              <p className="text-gray-600 text-center mb-6 text-base">
                Detaylı bilgi almak için aşağıdaki formu doldurun ve danışmanlarımızla iletişime geçin!
              </p>

              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-center transition-opacity duration-500">
                  Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.
                </div>
              )}

              <form 
                onSubmit={handleSubmit} 
                className="space-y-4"
                method="POST"
                action="/api/contact"
                noValidate
              >
                {/* Name Field */}
                <div className="relative">
                  <label htmlFor="name" className="sr-only">Ad Soyad</label>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ad Soyad"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400`}
                    required
                    minLength={2}
                    maxLength={100}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="email" className="sr-only">E-posta Adresi</label>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="E-posta Adresi"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400`}
                      required
                      maxLength={255}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <label htmlFor="phone" className="sr-only">Telefon Numarası</label>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Telefon Numarası"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border ${errors.phone ? "border-red-500" : "border-red-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400`}
                      required
                      maxLength={20}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label htmlFor="message" className="sr-only">Konu ve Mesajınız</label>
                  <div className="absolute top-3 left-0 pl-3 flex pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Konu ve Mesajınız"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400 resize-none`}
                    required
                    minLength={10}
                    maxLength={1000}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Hidden honeypot field for spam protection */}
                <input
                  type="text"
                  name="website"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className={`flex items-center gap-2 px-8 py-3 font-semibold rounded-lg transition-all duration-200 ${
                      isSubmitting 
                        ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                    aria-label="Mesaj Gönder"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Mesaj Gönder
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* WhatsApp Contact Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <a
            href="https://wa.me/905336819127"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            aria-label="WhatsApp İletişim"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}