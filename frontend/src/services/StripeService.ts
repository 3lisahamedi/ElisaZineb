import * as BookCarsTypes from ':BookCars-types'
import axiosInstance from './axiosInstance'

/**
 * Create Checkout Session.
 *
 * @param {BookCarsTypes.CreatePaymentPayload} payload
 * @returns {Promise<BookCarsTypes.PaymentResult>}
 */
export const createCheckoutSession = (payload: BookCarsTypes.CreatePaymentPayload): Promise<BookCarsTypes.PaymentResult> =>
  axiosInstance
    .post(
      '/api/create-checkout-session',
      payload
    )
    .then((res) => res.data)

/**
 * Check Checkout Session.
 *
 * @param {string} sessionId
 * @returns {Promise<number>}
 */
export const checkCheckoutSession = (sessionId: string): Promise<number> =>
  axiosInstance
    .post(
      `/api/check-checkout-session/${sessionId}`,
      null
    )
    .then((res) => res.status)

/**
 * Create Payment Intent.
 *
 * @param {BookCarsTypes.CreatePaymentPayload} payload
 * @returns {Promise<BookCarsTypes.CreatePaymentIntentResult>}
 */
export const createPaymentIntent = (payload: BookCarsTypes.CreatePaymentPayload): Promise<BookCarsTypes.PaymentResult> =>
  axiosInstance
    .post(
      '/api/create-payment-intent',
      payload
    )
    .then((res) => res.data)
