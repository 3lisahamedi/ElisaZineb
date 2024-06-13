import * as BookCarsTypes from ':BookCars-types'
import axiosInstance from './axiosInstance'
import * as UserService from './UserService'

/**
 * Validate a Location name.
 *
 * @param {BookCarsTypes.ValidateLocationPayload} data
 * @returns {Promise<number>}
 */
export const validate = (data: BookCarsTypes.ValidateLocationPayload): Promise<number> =>
  axiosInstance
    .post(
      '/api/validate-location',
      data,
      { withCredentials: true }
    )
    .then((res) => res.status)

/**
 * Create a Location.
 *
 * @param {BookCarsTypes.LocationName[]} data
 * @returns {Promise<number>}
 */
export const create = (data: BookCarsTypes.LocationName[]): Promise<number> =>
  axiosInstance
    .post(
      '/api/create-location',
      data,
      { withCredentials: true }
    )
    .then((res) => res.status)

/**
 * Update a Location.
 *
 * @param {string} id
 * @param {BookCarsTypes.LocationName[]} data
 * @returns {Promise<number>}
 */
export const update = (id: string, data: BookCarsTypes.LocationName[]): Promise<number> =>
  axiosInstance
    .put(
      `/api/update-location/${id}`,
      data,
      { withCredentials: true }
    )
    .then((res) => res.status)

/**
 * Delete a Location.
 *
 * @param {string} id
 * @returns {Promise<number>}
 */
export const deleteLocation = (id: string): Promise<number> =>
  axiosInstance
    .delete(
      `/api/delete-location/${encodeURIComponent(id)}`,
      { withCredentials: true }
    )
    .then((res) => res.status)

/**
 * Get a Location by ID.
 *
 * @param {string} id
 * @returns {Promise<BookCarsTypes.Location>}
 */
export const getLocation = (id: string): Promise<BookCarsTypes.Location> =>
  axiosInstance
    .get(
      `/api/location/${encodeURIComponent(id)}/${UserService.getLanguage()}`,
      { withCredentials: true }
    )
    .then((res) => res.data)

/**
 * Get Locations.
 *
 * @param {string} keyword
 * @param {number} page
 * @param {number} size
 * @returns {Promise<BookCarsTypes.Result<BookCarsTypes.Location>>}
 */
export const getLocations = (keyword: string, page: number, size: number): Promise<BookCarsTypes.Result<BookCarsTypes.Location>> =>
  axiosInstance
    .get(
      `/api/locations/${page}/${size}/${UserService.getLanguage()}/?s=${encodeURIComponent(keyword)}`,
      { withCredentials: true }
    )
    .then((res) => res.data)

/**
 * Check if a Location is related to a Car.
 *
 * @param {string} id
 * @returns {Promise<number>}
 */
export const check = (id: string): Promise<number> =>
  axiosInstance
    .get(
      `/api/check-location/${encodeURIComponent(id)}`,
      { withCredentials: true }
    )
    .then((res) => res.status)
