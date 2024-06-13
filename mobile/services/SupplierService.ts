import axiosInstance from './axiosInstance'
import * as BookCarsTypes from ':BookCars-types'

/**
 * Get all suppliers.
 *
 * @returns {Promise<BookCarsTypes.User[]>}
 */
export const getAllSuppliers = (): Promise<BookCarsTypes.User[]> =>
  axiosInstance
    .get(
      '/api/all-suppliers'
    )
    .then((res) => res.data)
