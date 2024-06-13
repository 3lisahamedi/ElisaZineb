import * as BookCarsTypes from ':BookCars-types'
import axiosInstance from './axiosInstance'

/**
 * Validate Supplier name.
 *
 * @param {BookCarsTypes.ValidateSupplierPayload} data
 * @returns {Promise<number>}
 */
export const validate = (data: BookCarsTypes.ValidateSupplierPayload): Promise<number> =>
  axiosInstance
    .post(
      '/api/validate-supplier',
      data,
      { withCredentials: true }
    )
    .then((res) => res.status)

/**
 * Update a Supplier.
 *
 * @param {BookCarsTypes.UpdateSupplierPayload} data
 * @returns {Promise<number>}
 */
export const update = (data: BookCarsTypes.UpdateSupplierPayload): Promise<number> =>
  axiosInstance
    .put(
      '/api/update-supplier',
      data,
      { withCredentials: true }
    )
    .then((res) => res.status)

/**
 * Delete a Supplier.
 *
 * @param {string} id
 * @returns {Promise<number>}
 */
export const deleteSupplier = (id: string): Promise<number> =>
  axiosInstance
    .delete(
      `/api/delete-supplier/${encodeURIComponent(id)}`,
      { withCredentials: true }
    )
    .then((res) => res.status)

/**
 * Get a Supplier by ID.
 *
 * @param {string} id
 * @returns {Promise<BookCarsTypes.User>}
 */
export const getSupplier = (id: string): Promise<BookCarsTypes.User> =>
  axiosInstance
    .get(
      `/api/supplier/${encodeURIComponent(id)}`,
      { withCredentials: true }
    )
    .then((res) => res.data)

/**
 * Get Suppliers.
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

/**
 * Get all Suppliers.
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
