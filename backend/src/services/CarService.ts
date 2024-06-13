import * as BookCarsTypes from ':BookCars-types'
import axiosInstance from './axiosInstance'
import * as UserService from './UserService'

/**
 * Create a Car.
 *
 * @param {BookCarsTypes.CreateCarPayload} data
 * @returns {Promise<BookCarsTypes.Car>}
 */
export const create = (data: BookCarsTypes.CreateCarPayload): Promise<BookCarsTypes.Car> =>
  axiosInstance
    .post(
      '/api/create-car',
      data,
      { withCredentials: true }
    )
    .then((res) => res.data)

/**
 * Update a Car.
 *
 * @param {BookCarsTypes.UpdateCarPayload} data
 * @returns {Promise<number>}
 */
export const update = (data: BookCarsTypes.UpdateCarPayload): Promise<number> =>
  axiosInstance
    .put(
      '/api/update-car',
      data,
      { withCredentials: true }
    )
    .then((res) => res.status)

/**
 * Check if a Car is related to a booking.
 *
 * @param {string} id
 * @returns {Promise<number>}
 */
export const check = (id: string): Promise<number> =>
  axiosInstance
    .get(
      `/api/check-car/${encodeURIComponent(id)}`,
      { withCredentials: true }
    )
    .then((res) => res.status)

/**
 * Delete a Car.
 *
 * @param {string} id
 * @returns {Promise<number>}
 */
export const deleteCar = (id: string): Promise<number> =>
  axiosInstance
    .delete(
      `/api/delete-car/${encodeURIComponent(id)}`,
      { withCredentials: true }
    )
    .then((res) => res.status)

/**
 * Create a temporary Car image.
 *
 * @param {Blob} file
 * @returns {Promise<string>}
 */
export const createImage = (file: Blob): Promise<string> => {
  const formData = new FormData()
  formData.append('image', file)

  return axiosInstance
    .post(
      '/api/create-car-image',
      formData,
      {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' }
      },
    )
    .then((res) => res.data)
}

/**
 * Update a Car image.
 *
 * @param {string} id
 * @param {Blob} file
 * @returns {Promise<number>}
 */
export const updateImage = (id: string, file: Blob): Promise<number> => {
  const formData = new FormData()
  formData.append('image', file)

  return axiosInstance
    .post(
      `/api/update-car-image/${encodeURIComponent(id)}`,
      formData,
      {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' }
      },
    )
    .then((res) => res.status)
}

/**
 * Delete a Car image.
 *
 * @param {string} id
 * @returns {Promise<number>}
 */
export const deleteImage = (id: string): Promise<number> =>
  axiosInstance
    .post(
      `/api/delete-car-image/${encodeURIComponent(id)}`,
      null,
      { withCredentials: true }
    )
    .then((res) => res.status)

/**
 * Delete a temporary Car image.
 *
 * @param {string} image
 * @returns {Promise<number>}
 */
export const deleteTempImage = (image: string): Promise<number> =>
  axiosInstance
    .post(
      `/api/delete-temp-car-image/${encodeURIComponent(image)}`,
      null,
      { withCredentials: true }
    )
    .then((res) => res.status)

/**
 * Get a Car by ID.
 *
 * @param {string} id
 * @returns {Promise<BookCarsTypes.Car>}
 */
export const getCar = (id: string): Promise<BookCarsTypes.Car> =>
  axiosInstance
    .get(
      `/api/car/${encodeURIComponent(id)}/${UserService.getLanguage()}`,
      { withCredentials: true }
    )
    .then((res) => res.data)

/**
 * Get Cars.
 *
 * @param {string} keyword
 * @param {BookCarsTypes.GetCarsPayload} data
 * @param {number} page
 * @param {number} size
 * @returns {Promise<BookCarsTypes.Result<BookCarsTypes.Car>>}
 */
export const getCars = (keyword: string, data: BookCarsTypes.GetCarsPayload, page: number, size: number): Promise<BookCarsTypes.Result<BookCarsTypes.Car>> =>
  axiosInstance
    .post(
      `/api/cars/${page}/${size}/?s=${encodeURIComponent(keyword)}`,
      data,
      { withCredentials: true }
    )
    .then((res) => res.data)

/**
 * Get Cars by supplier and location.
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
