import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();
    
    // Check if nodemailer is properly installed
    let nodemailer;
    try {
      nodemailer = require('nodemailer');
    } catch (requireError) {
      console.error('Failed to require nodemailer:', requireError);
      return NextResponse.json({ 
        success: false, 
        error: 'Nodemailer not properly installed' 
      }, { status: 500 });
    }
    
    console.log('Nodemailer loaded:', typeof nodemailer.createTransport);
    
    // Use createTransport instead of createTransporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'mavzer@mavzerambalaj.com.tr',
      subject: `Website İletişim Formu - ${name}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Mesaj:</strong> ${message}</p>
      `
    });

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ 
      success: false, 
      error: (error as Error).message 
    }, { status: 500 });
  }
}