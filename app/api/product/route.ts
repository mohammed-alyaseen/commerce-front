import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: any) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '12345');
  const data = await request.json();
  const priceId = data.priceId || 50;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000',
    cancel_url: 'http://localhost:3000'
  });

  return NextResponse.json(session.url);
}
