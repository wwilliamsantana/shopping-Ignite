import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIBE_KEY_SECRET!, {
  apiVersion: "2022-11-15",
  appInfo:{
    name: "Ignite Shop"
  }
})