import axiosInstance from './axiosInstance'
import * as UserService from './UserService'
import * as BookCarsTypes from ':BookCars-types'

/**
 * Get locations.
 *
 * @async
 * @param {string} keyword
 * @param {number} page
 * @param {number} size
 * @returns {Promise<BookCarsTypes.Result<BookCarsTypes.Location>>}
 */
export const getLocations = async (keyword: string, page: number, size: number): Promise<BookCarsTypes.Result<BookCarsTypes.Location>> => {
  const language = await UserService.getLanguage()
  return axiosInstance
    .get(
      `/api/locations/${page}/${size}/${language}/?s=${encodeURIComponent(keyword)}`
    )
    .then((res) => res.data)
}

/**
 * Get a Location by ID.
 *
 * @async
 * @param {string} id
 * @returns {Promise<BookCarsTypes.Location>}
 */
export const getLocation = async (id: string): Promise<BookCarsTypes.Location> => {
  const language = await UserService.getLanguage()
  return axiosInstance
    .get(
      `/api/location/${encodeURIComponent(id)}/${language}`
    )
    .then((res) => res.data)
}
