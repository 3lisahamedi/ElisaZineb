import * as BookCarsTypes from ':BookCars-types'
import axiosInstance from './axiosInstance'

/**
 * Create Payment Intent
 *
 * @param {BookCarsTypes.CreatePaymentIntentPayload} payload
 * @returns {Promise<BookCarsTypes.CreatePaymentIntentResult>}
 */
export const createPaymentIntent = (payload: BookCarsTypes.CreatePaymentPayload): Promise<BookCarsTypes.PaymentResult> =>
  axiosInstance
    .post(
      '/api/create-payment-intent',
      payload
    )
    .then((res) => res.data)
