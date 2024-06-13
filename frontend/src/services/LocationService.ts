import * as BookCarsTypes from ':BookCars-types'
import axiosInstance from './axiosInstance'
import * as UserService from './UserService'

/**
 * Get locations.
 *
 * @param {string} keyword
 * @param {number} page
 * @param {number} size
 * @returns {Promise<BookCarsTypes.Result<BookCarsTypes.Location>>}
 */
export const getLocations = (keyword: string, page: number, size: number): Promise<BookCarsTypes.Result<BookCarsTypes.Location>> =>
  axiosInstance
    .get(
      `/api/locations/${page}/${size}/${UserService.getLanguage()}/?s=${encodeURIComponent(keyword)}`
    )
    .then((res) => res.data)

/**
 * Get a Location by ID.
 *
 * @param {string} id
 * @returns {Promise<BookCarsTypes.Location>}
 */
export const getLocation = (id: string): Promise<BookCarsTypes.Location> =>
  axiosInstance
    .get(
      `/api/location/${encodeURIComponent(id)}/${UserService.getLanguage()}`
    )
    .then((res) => res.data)
