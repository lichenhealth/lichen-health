import Stripe from 'stripe';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    res.status(500).json({ error: 'Donations are not configured yet. Please email connect@lichen.health.' });
    return;
  }
  const stripe = new Stripe(key);
  try {
    const { amount, frequency } = req.body || {};
    const cents = Math.round(Number(amount) * 100);
    if (!Number.isFinite(cents) || cents < 100) {
      res.status(400).json({ error: 'Please enter an amount of at least $1.' });
      return;
    }
    const origin = req.headers.origin || (req.headers.host ? `https://${req.headers.host}` : 'https://lichen.health');
    const urls = {
      success_url: `${origin}/donate?status=success`,
      cancel_url: `${origin}/donate?status=cancelled`,
    };

    let session;
    if (frequency === 'monthly' || frequency === 'annually') {
      const interval = frequency === 'annually' ? 'year' : 'month';
      const label = interval === 'year' ? 'Annual' : 'Monthly';
      session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        line_items: [{
          price_data: {
            currency: 'usd',
            unit_amount: cents,
            recurring: { interval },
            product_data: { name: `${label} donation to Lichen Health` },
          },
          quantity: 1,
        }],
        ...urls,
      });
    } else {
      session = await stripe.checkout.sessions.create({
        mode: 'payment',
        submit_type: 'donate',
        line_items: [{
          price_data: {
            currency: 'usd',
            unit_amount: cents,
            product_data: { name: 'Donation to Lichen Health' },
          },
          quantity: 1,
        }],
        ...urls,
      });
    }
    res.status(200).json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e?.message || 'Something went wrong creating your donation.' });
  }
}
