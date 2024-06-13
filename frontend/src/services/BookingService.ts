import * as BookCarsTypes from ':BookCars-types'
import axiosInstance from './axiosInstance'
import * as UserService from './UserService'

/**
 * Complete the checkout process and create the Booking.
 *
 * @param {BookCarsTypes.CheckoutPayload} data
 * @returns {Promise<number>}
 */
export const checkout = (data: BookCarsTypes.CheckoutPayload): Promise<{ status: number, bookingId: string }> =>
  axiosInstance
    .post(
      '/api/checkout',
      data
    )
    .then((res) => ({ status: res.status, bookingId: res.data.bookingId }))

/**
 * Update a Booking.
 *
 * @param {BookCarsTypes.UpsertBookingPayload} data
 * @returns {Promise<number>}
 */
export const update = (data: BookCarsTypes.UpsertBookingPayload): Promise<number> =>
  axiosInstance
    .put(
      '/api/update-booking',
      data,
      { withCredentials: true }
    )
    .then((res) => res.status)

/**
 * Get bookings.
 *
 * @param {BookCarsTypes.GetBookingsPayload} payload
 * @param {number} page
 * @param {number} size
 * @returns {Promise<BookCarsTypes.Result<BookCarsTypes.Booking>>}
 */
export const getBookings = (payload: BookCarsTypes.GetBookingsPayload, page: number, size: number): Promise<BookCarsTypes.Result<BookCarsTypes.Booking>> =>
  axiosInstance
    .post(
      `/api/bookings/${page}/${size}/${UserService.getLanguage()}`,
      payload,
      { withCredentials: true }
    )
    .then((res) => res.data)

/**
 * Get a Booking by ID.
 *
 * @param {string} id
 * @returns {Promise<BookCarsTypes.Booking>}
 */
export const getBooking = (id: string): Promise<BookCarsTypes.Booking> =>
  axiosInstance
    .get(
      `/api/booking/${encodeURIComponent(id)}/${UserService.getLanguage()}`,
      { withCredentials: true }
    )
    .then((res) => res.data)

/**
 * Cancel a Booking.
 *
 * @param {string} id
 * @returns {Promise<number>}
 */
export const cancel = (id: string): Promise<number> =>
  axiosInstance
    .post(
      `/api/cancel-booking/${encodeURIComponent(id)}`,
      null,
      { withCredentials: true }
    ).then((res) => res.status)

/**
 * Delete temporary Booking created from checkout session.
 *
 * @param {string} bookingId
 * @param {string} sessionId
 * @returns {Promise<number>}
 */
export const deleteTempBooking = (bookingId: string, sessionId: string): Promise<number> =>
  axiosInstance
    .delete(
      `/api/delete-temp-booking/${bookingId}/${sessionId}`,
    ).then((res) => res.status)
