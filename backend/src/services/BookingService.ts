import * as BookCarsTypes from ':BookCars-types'
import axiosInstance from './axiosInstance'
import * as UserService from './UserService'

/**
 * Create a Booking.
 *
 * @param {BookCarsTypes.UpsertBookingPayload} data
 * @returns {Promise<BookCarsTypes.Booking>}
 */
export const create = (data: BookCarsTypes.UpsertBookingPayload): Promise<BookCarsTypes.Booking> =>
  axiosInstance
    .post(
      '/api/create-booking',
      data,
      { withCredentials: true }
    )
    .then((res) => res.data)

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
 * Update a Booking status.
 *
 * @param {BookCarsTypes.UpdateStatusPayload} data
 * @returns {Promise<number>}
 */
export const updateStatus = (data: BookCarsTypes.UpdateStatusPayload): Promise<number> =>
  axiosInstance
    .post(
      '/api/update-booking-status',
      data,
      { withCredentials: true }
    )
    .then((res) => res.status)

/**
 * Delete Bookings.
 *
 * @param {string[]} ids
 * @returns {Promise<number>}
 */
export const deleteBookings = (ids: string[]): Promise<number> =>
  axiosInstance
    .post(
      '/api/delete-bookings',
      ids,
      { withCredentials: true }
    )
    .then((res) => res.status)

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
 * Get Bookings.
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
