import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(request: NextApiRequest, response: NextApiResponse){
  const priceId = "price_1MECmUGa4b7MtFF4va0Rdfkc"

  const successUrl = `${process.env.NEXT_APP}/success`
  const cancelUrl = `${process.env.NEXT_APP}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    cancel_url: cancelUrl,
    success_url: successUrl,
    line_items: [
      {
        price: priceId,
        quantity: 2
      }
    ]
  })

  return response.status(201).json({
    checkoutURL: checkoutSession.url
  })
}