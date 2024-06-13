import * as BookCarsTypes from ':BookCars-types'
import axiosInstance from './axiosInstance'
import * as UserService from './UserService'

/**
 * Get cars.
 *
 * @param {BookCarsTypes.GetCarsPayload} data
 * @param {number} page
 * @param {number} size
 * @returns {Promise<BookCarsTypes.Result<BookCarsTypes.Car>>}
 */
export const getCars = (data: BookCarsTypes.GetCarsPayload, page: number, size: number): Promise<BookCarsTypes.Result<BookCarsTypes.Car>> =>
  axiosInstance
    .post(
      `/api/frontend-cars/${page}/${size}}`,
      data
    ).then((res) => res.data)

/**
 * Get a Car by ID.
 *
 * @param {string} id
 * @returns {Promise<BookCarsTypes.Car>}
 */
export const getCar = (id: string): Promise<BookCarsTypes.Car> =>
  axiosInstance
    .get(
      `/api/car/${encodeURIComponent(id)}/${UserService.getLanguage()}`
    )
    .then((res) => res.data)

/**
 * Get cars by agency and location.
 *
 * @param {string} keyword
 * @param {BookCarsTypes.GetBookingCarsPayload} data
 * @param {number} page
 * @param {number} size
 * @returns {Promise<BookCarsTypes.Car[]>}
 */
export const getBookingCars = (keyword: string, data: BookCarsTypes.GetBookingCarsPayload, page: number, size: number): Promise<BookCarsTypes.Car[]> =>
  axiosInstance
    .post(
      `/api/booking-cars/${page}/${size}/?s=${encodeURIComponent(keyword)}`,
      data,
      { withCredentials: true }
    )
    .then((res) => res.data)
