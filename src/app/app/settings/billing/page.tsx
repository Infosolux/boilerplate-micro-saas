'use server'

import { config } from '@/config'
import { auth } from '@/services/auth'
import { createCheckoutSession } from '@/services/stripe'
import { redirect } from 'next/navigation'

export async function createCheckoutSessionAction() {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'Not authorized',
      data: null,
    }
  }

  const checkoutSession = await createCheckoutSession({
    userId: session.user.id as string,
    userEmail: session.user.email as string,
    userStripeSubscriptionId: session.user.stripeSubscriptionId as string,
    priceId: config.stripe.plans.free.priceId,
  });

  if (!checkoutSession.url) return
  redirect(checkoutSession.url)
}