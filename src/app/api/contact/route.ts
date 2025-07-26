import { NextResponse } from 'next/server'
import { resend } from '@/lib/resend'

export async function POST(req: Request) {
  const body = await req.json()

  try {
    const data = await resend.emails.send({
      from: 'NEW - Potential Client <website@aurickchatterjee.com>',
      to: ['aurickchat@gmail.com'],
      subject: 'Message From Website - New Contact Form Submission',
      text: `
        Name: ${body.name}
        Email: ${body.email}
        Phone Number: ${body.phone}
        What they are looking to build: ${body.project}
        Budget: ${body.budget || "Not provided"}
        How they found me: ${body.referral || "Not specified"}
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
