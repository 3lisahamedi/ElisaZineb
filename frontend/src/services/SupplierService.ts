import * as BookCarsTypes from ':BookCars-types'
import axiosInstance from './axiosInstance'

/**
 * Get all suppliers.
 *
 * @returns {Promise<BookCarsTypes.User[]>}
 */
export const getAllSuppliers = (): Promise<BookCarsTypes.User[]> =>
  axiosInstance
    .get(
      '/api/all-suppliers',
      { withCredentials: true }
)
    .then((res) => res.data)

/**
 * Get suppliers.
 *
 * @param {string} keyword
 * @param {number} page
 * @param {number} size
 * @returns {Promise<BookCarsTypes.Result<BookCarsTypes.User>>}
 */
export const getSuppliers = (keyword: string, page: number, size: number): Promise<BookCarsTypes.Result<BookCarsTypes.User>> =>
  axiosInstance
    .get(
      `/api/suppliers/${page}/${size}/?s=${encodeURIComponent(keyword)}`,
      { withCredentials: true }
    )
    .then((res) => res.data)
