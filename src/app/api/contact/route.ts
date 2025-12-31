import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Send email to Aqeela
    await resend.emails.send({
      from: 'You Can Heal <onboarding@resend.dev>',
      to: 'aqeela.carr@gmail.com',
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: 'You Can Heal <onboarding@resend.dev>',
      to: email,
      subject: 'Thank you for reaching out - You Can Heal',
      html: `
        <h2>Thank you for reaching out, ${name}!</h2>
        <p>I've received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, take a breath. You've taken an important first step.</p>
        <br />
        <p>Warmly,</p>
        <p>Aqeela</p>
        <p><em>You Can Heal</em></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

