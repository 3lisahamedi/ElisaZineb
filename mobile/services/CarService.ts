import axiosInstance from './axiosInstance'
import * as UserService from './UserService'
import * as BookCarsTypes from ':BookCars-types'

/**
 * Get cars.
 *
 * @async
 * @param {BookCarsTypes.GetCarsPayload} data
 * @param {number} page
 * @param {number} size
 * @returns {Promise<BookCarsTypes.Result<BookCarsTypes.Car>>}
 */
export const getCars = async (data: BookCarsTypes.GetCarsPayload, page: number, size: number): Promise<BookCarsTypes.Result<BookCarsTypes.Car>> =>
  axiosInstance
    .post(
      `/api/frontend-cars/${page}/${size}}`,
      data
    )
    .then((res) => res.data)

/**
 * Get a Car by ID.
 *
 * @async
 * @param {string} id
 * @returns {Promise<BookCarsTypes.Car>}
 */
export const getCar = async (id: string): Promise<BookCarsTypes.Car> => {
  const language = await UserService.getLanguage()
  return axiosInstance
    .get(
      `/api/car/${encodeURIComponent(id)}/${language}`
    )
    .then((res) => res.data)
}
