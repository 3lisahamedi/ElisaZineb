import { toast } from 'react-toastify'
import validator from 'validator'
import * as BookCarsTypes from ':BookCars-types'
import * as BookCarsHelper from ':BookCars-helper'
import { strings as commonStrings } from '../lang/common'
import { strings } from '../lang/cars'
import * as CarService from '../services/CarService'
import env from '../config/env.config'

/**
 * Get language.
 *
 * @param {string} code
 * @returns {*}
 */
export const getLanguage = (code: string) => env._LANGUAGES.find((l) => l.code === code)

/**
 * Toast info message.
 *
 * @param {string} message
 */
export const info = (message: string) => {
  toast.info(message)
}

/**
 * Toast error message.
 *
 * @param {?unknown} [err]
 * @param {?string} [message]
 */
export const error = (err?: unknown, message?: string) => {
  if (err && console && console.error) {
    console.error(err)
  }
  if (message) {
    toast.error(message)
  } else {
    toast.error(commonStrings.GENERIC_ERROR)
  }
}

/**
 * Get car type label.
 *
 * @param {string} type
 * @returns {string}
 */
export const getCarType = (type: string) => {
  switch (type) {
    case BookCarsTypes.CarType.Diesel:
      return strings.DIESEL

    case BookCarsTypes.CarType.Gasoline:
      return strings.GASOLINE

    default:
      return ''
  }
}

/**
 * Get short car type label.
 *
 * @param {string} type
 * @returns {string}
 */
export const getCarTypeShort = (type: string) => {
  switch (type) {
    case BookCarsTypes.CarType.Diesel:
      return strings.DIESEL_SHORT

    case BookCarsTypes.CarType.Gasoline:
      return strings.GASOLINE_SHORT

    case BookCarsTypes.CarType.Electric:
      return strings.ELECTRIC_SHORT

    case BookCarsTypes.CarType.Hybrid:
      return strings.HYBRID_SHORT

    case BookCarsTypes.CarType.PlugInHybrid:
      return strings.PLUG_IN_HYBRID_SHORT

    default:
      return ''
  }
}

/**
 * Get gearbox type label.
 *
 * @param {string} type
 * @returns {string}
 */
export const getGearboxType = (type: string) => {
  switch (type) {
    case BookCarsTypes.GearboxType.Manual:
      return strings.GEARBOX_MANUAL

    case BookCarsTypes.GearboxType.Automatic:
      return strings.GEARBOX_AUTOMATIC

    default:
      return ''
  }
}

/**
 * Get short gearbox type label.
 *
 * @param {string} type
 * @returns {string}
 */
export const getGearboxTypeShort = (type: string) => {
  switch (type) {
    case BookCarsTypes.GearboxType.Manual:
      return strings.GEARBOX_MANUAL_SHORT

    case BookCarsTypes.GearboxType.Automatic:
      return strings.GEARBOX_AUTOMATIC_SHORT

    default:
      return ''
  }
}

/**
 * Get fuel policy label.
 *
 * @param {string} type
 * @returns {string}
 */
export const getFuelPolicy = (type: string) => {
  switch (type) {
    case BookCarsTypes.FuelPolicy.LikeForlike:
      return strings.FUEL_POLICY_LIKE_FOR_LIKE

    case BookCarsTypes.FuelPolicy.FreeTank:
      return strings.FUEL_POLICY_FREE_TANK

    default:
      return ''
  }
}

/**
 * Get car type tooltip.
 *
 * @param {string} type
 * @returns {string}
 */
export const getCarTypeTooltip = (type: string) => {
  switch (type) {
    case BookCarsTypes.CarType.Diesel:
      return strings.DIESEL_TOOLTIP

    case BookCarsTypes.CarType.Gasoline:
      return strings.GASOLINE_TOOLTIP

    case BookCarsTypes.CarType.Electric:
      return strings.ELECTRIC_TOOLTIP

    case BookCarsTypes.CarType.Hybrid:
      return strings.HYBRID_TOOLTIP

    case BookCarsTypes.CarType.PlugInHybrid:
      return strings.PLUG_IN_HYBRID_TOOLTIP

    default:
      return ''
  }
}

/**
 * Get gearbox tooltip.
 *
 * @param {string} type
 * @returns {string}
 */
export const getGearboxTooltip = (type: string) => {
  switch (type) {
    case BookCarsTypes.GearboxType.Manual:
      return strings.GEARBOX_MANUAL_TOOLTIP

    case BookCarsTypes.GearboxType.Automatic:
      return strings.GEARBOX_AUTOMATIC_TOOLTIP

    default:
      return ''
  }
}

/**
 * Get seats tooltip.
 *
 * @param {number} seats
 * @returns {string}
 */
export const getSeatsTooltip = (seats: number) => `${strings.SEATS_TOOLTIP_1}${seats} ${strings.SEATS_TOOLTIP_2}`

/**
 * Get doors tooltip.
 *
 * @param {number} doors
 * @returns {string}
 */
export const getDoorsTooltip = (doors: number) => `${strings.DOORS_TOOLTIP_1}${doors} ${strings.DOORS_TOOLTIP_2}`

/**
 * Get fuel policy tooltip.
 *
 * @param {string} fuelPolicy
 * @returns {string}
 */
export const getFuelPolicyTooltip = (fuelPolicy: string) => {
  switch (fuelPolicy) {
    case BookCarsTypes.FuelPolicy.LikeForlike:
      return strings.FUEL_POLICY_LIKE_FOR_LIKE_TOOLTIP

    case BookCarsTypes.FuelPolicy.FreeTank:
      return strings.FUEL_POLICY_FREE_TANK_TOOLTIP

    default:
      return ''
  }
}

/**
 * Get mileage label.
 *
 * @param {number} mileage
 * @param {string} language
 * @returns {string}
 */
export const getMileage = (mileage: number, language: string) => {
  if (mileage === -1) {
    return strings.UNLIMITED
  }
  return `${BookCarsHelper.formatNumber(mileage, language)} ${strings.MILEAGE_UNIT}`
}

/**
 * Get mileage tooltip.
 *
 * @param {number} mileage
 * @param {string} language
 * @returns {string}
 */
export const getMileageTooltip = (mileage: number, language: string) => {
  const fr = BookCarsHelper.isFrench(language)

  if (mileage === -1) {
    return `${strings.MILEAGE} ${strings.UNLIMITED.toLocaleLowerCase()}.`
  }
  return `${strings.MILEAGE}${fr ? ' : ' : ': '}${BookCarsHelper.formatNumber(mileage, language)} ${strings.MILEAGE_UNIT}`
}

/**
 * Get additional driver label.
 *
 * @param {number} additionalDriver
 * @param {string} language
 * @returns {string}
 */
export const getAdditionalDriver = (additionalDriver: number, language: string) => {
  const fr = BookCarsHelper.isFrench(language)

  if (additionalDriver === -1) {
    return `${strings.ADDITIONAL_DRIVER}${fr ? ' : ' : ': '}${strings.UNAVAILABLE}`
  } if (additionalDriver === 0) {
    return `${strings.ADDITIONAL_DRIVER}${fr ? ' : ' : ': '}${strings.INCLUDED}`
  }
  return `${strings.ADDITIONAL_DRIVER}${fr ? ' : ' : ': '}${BookCarsHelper.formatPrice(additionalDriver, commonStrings.CURRENCY, language)}${commonStrings.DAILY}`
}

/**
 * Get full insurance label.
 *
 * @param {number} fullInsurance
 * @param {string} language
 * @returns {string}
 */
export const getFullInsurance = (fullInsurance: number, language: string) => {
  const fr = BookCarsHelper.isFrench(language)

  if (fullInsurance === -1) {
    return `${strings.FULL_INSURANCE}${fr ? ' : ' : ': '}${strings.UNAVAILABLE}`
  } if (fullInsurance === 0) {
    return `${strings.FULL_INSURANCE}${fr ? ' : ' : ': '}${strings.INCLUDED}${fr ? 'e' : ''}`
  }
  return `${strings.FULL_INSURANCE}${fr ? ' : ' : ': '}${BookCarsHelper.formatPrice(fullInsurance, commonStrings.CURRENCY, language)}${commonStrings.DAILY}`
}

/**
 * Get collision damage waiver label.
 *
 * @param {number} collisionDamageWaiver
 * @param {string} language
 * @returns {string}
 */
export const getCollisionDamageWaiver = (collisionDamageWaiver: number, language: string) => {
  const fr = BookCarsHelper.isFrench(language)

  if (collisionDamageWaiver === -1) {
    return `${strings.COLLISION_DAMAGE_WAVER}${fr ? ' : ' : ': '}${strings.UNAVAILABLE}`
  } if (collisionDamageWaiver === 0) {
    return `${strings.COLLISION_DAMAGE_WAVER}${fr ? ' : ' : ': '}${strings.INCLUDED}${fr ? 'e' : ''}`
  }
  return `${strings.COLLISION_DAMAGE_WAVER}${fr ? ' : ' : ': '}${BookCarsHelper.formatPrice(collisionDamageWaiver, commonStrings.CURRENCY, language)}${commonStrings.DAILY}`
}

/**
 * Get theft protection label.
 *
 * @param {number} theftProtection
 * @param {string} language
 * @returns {string}
 */
export const getTheftProtection = (theftProtection: number, language: string) => {
  const fr = BookCarsHelper.isFrench(language)

  if (theftProtection === -1) {
    return `${strings.THEFT_PROTECTION}${fr ? ' : ' : ': '}${strings.UNAVAILABLE}`
  } if (theftProtection === 0) {
    return `${strings.THEFT_PROTECTION}${fr ? ' : ' : ': '}${strings.INCLUDED}${fr ? 'e' : ''}`
  }
  return `${strings.THEFT_PROTECTION}${fr ? ' : ' : ': '}${BookCarsHelper.formatPrice(theftProtection, commonStrings.CURRENCY, language)}${commonStrings.DAILY}`
}

/**
 * Get amendments label.
 *
 * @param {number} amendments
 * @param {string} language
 * @returns {string}
 */
export const getAmendments = (amendments: number, language: string) => {
  const fr = BookCarsHelper.isFrench(language)

  if (amendments === -1) {
    return `${strings.AMENDMENTS}${fr ? ' : ' : ': '}${strings.UNAVAILABLE}${fr ? 's' : ''}`
  } if (amendments === 0) {
    return `${strings.AMENDMENTS}${fr ? ' : ' : ': '}${strings.INCLUDED}${fr ? 'es' : ''}`
  }
  return `${strings.AMENDMENTS}${fr ? ' : ' : ': '}${BookCarsHelper.formatPrice(amendments, commonStrings.CURRENCY, language)}`
}

/**
 * Get cancellation label.
 *
 * @param {number} cancellation
 * @param {string} language
 * @returns {string}
 */
export const getCancellation = (cancellation: number, language: string) => {
  const fr = BookCarsHelper.isFrench(language)

  if (cancellation === -1) {
    return `${strings.CANCELLATION}${fr ? ' : ' : ': '}${strings.UNAVAILABLE}`
  } if (cancellation === 0) {
    return `${strings.CANCELLATION}${fr ? ' : ' : ': '}${strings.INCLUDED}${fr ? 'e' : ''}`
  }
  return `${strings.CANCELLATION}${fr ? ' : ' : ': '}${BookCarsHelper.formatPrice(cancellation, commonStrings.CURRENCY, language)}`
}

/**
 * Check whether a user is and administrator or not.
 *
 * @param {?BookCarsTypes.User} [user]
 * @returns {boolean}
 */
export const admin = (user?: BookCarsTypes.User): boolean => (user && user.type === BookCarsTypes.RecordType.Admin) ?? false

/**
 * Get booking status label.
 *
 * @param {string} status
 * @returns {string}
 */
export const getBookingStatus = (status?: BookCarsTypes.BookingStatus) => {
  switch (status) {
    case BookCarsTypes.BookingStatus.Void:
      return commonStrings.BOOKING_STATUS_VOID

    case BookCarsTypes.BookingStatus.Pending:
      return commonStrings.BOOKING_STATUS_PENDING

    case BookCarsTypes.BookingStatus.Deposit:
      return commonStrings.BOOKING_STATUS_DEPOSIT

    case BookCarsTypes.BookingStatus.Paid:
      return commonStrings.BOOKING_STATUS_PAID

    case BookCarsTypes.BookingStatus.Reserved:
      return commonStrings.BOOKING_STATUS_RESERVED

    case BookCarsTypes.BookingStatus.Cancelled:
      return commonStrings.BOOKING_STATUS_CANCELLED

    default:
      return ''
  }
}

/**
 * Get all booking statuses.
 *
 * @returns {BookCarsTypes.StatusFilterItem[]}
 */
export const getBookingStatuses = (): BookCarsTypes.StatusFilterItem[] => [
  {
    value: BookCarsTypes.BookingStatus.Void,
    label: commonStrings.BOOKING_STATUS_VOID,
  },
  {
    value: BookCarsTypes.BookingStatus.Pending,
    label: commonStrings.BOOKING_STATUS_PENDING,
  },
  {
    value: BookCarsTypes.BookingStatus.Deposit,
    label: commonStrings.BOOKING_STATUS_DEPOSIT,
  },
  {
    value: BookCarsTypes.BookingStatus.Paid,
    label: commonStrings.BOOKING_STATUS_PAID,
  },
  {
    value: BookCarsTypes.BookingStatus.Reserved,
    label: commonStrings.BOOKING_STATUS_RESERVED,
  },
  {
    value: BookCarsTypes.BookingStatus.Cancelled,
    label: commonStrings.BOOKING_STATUS_CANCELLED,
  },
]

/**
 * Get price.
 *
 * @async
 * @param {BookCarsTypes.Booking} booking
 * @param {(BookCarsTypes.Car | undefined | null)} car
 * @param {(price: number) => void} onSucess
 * @param {(err: unknown) => void} onError
 * @returns {void, onError: (err: unknown) => void) => any}
 */
export const price = async (
  booking: BookCarsTypes.Booking,
  car: BookCarsTypes.Car | undefined | null,
  onSucess: (_price: number) => void,
  onError: (err: unknown) => void
) => {
  const totalDays = (date1: Date, date2: Date) => Math.ceil((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24))

  try {
    if (!car) {
      car = await CarService.getCar(booking.car as string)
    }

    if (car) {
      const from = new Date(booking.from)
      const to = new Date(booking.to)
      const days = totalDays(from, to)

      let _price = car.price * days
      if (booking.cancellation && car.cancellation > 0) {
        _price += car.cancellation
      }
      if (booking.amendments && car.amendments > 0) {
        _price += car.amendments
      }
      if (booking.theftProtection && car.theftProtection > 0) {
        _price += car.theftProtection * days
      }
      if (booking.collisionDamageWaiver && car.collisionDamageWaiver > 0) {
        _price += car.collisionDamageWaiver * days
      }
      if (booking.fullInsurance && car.fullInsurance > 0) {
        _price += car.fullInsurance * days
      }
      if (booking.additionalDriver && car.additionalDriver > 0) {
        _price += car.additionalDriver * days
      }

      if (onSucess) {
        onSucess(_price)
      }
    } else if (onError) {
      onError(`Car ${booking.car} not found.`)
    }
  } catch (err) {
    if (onError) {
      onError(err)
    }
  }
}

/**
 * Get all user type;s.
 *
 * @returns {{}}
 */
export const getUserTypes = () => [
  {
    value: BookCarsTypes.UserType.Admin,
    label: commonStrings.RECORD_TYPE_ADMIN
  },
  {
    value: BookCarsTypes.UserType.Supplier,
    label: commonStrings.RECORD_TYPE_SUPPLIER,
  },
  {
    value: BookCarsTypes.UserType.User,
    label: commonStrings.RECORD_TYPE_USER
  },
]

/**
 * Get user type label.
 *
 * @param {string} status
 * @returns {string}
 */
export const getUserType = (status?: BookCarsTypes.UserType) => {
  switch (status) {
    case BookCarsTypes.UserType.Admin:
      return commonStrings.RECORD_TYPE_ADMIN

    case BookCarsTypes.UserType.Supplier:
      return commonStrings.RECORD_TYPE_SUPPLIER

    case BookCarsTypes.UserType.User:
      return commonStrings.RECORD_TYPE_USER

    default:
      return ''
  }
}

/**
 * Get days label.
 *
 * @param {number} days
 * @returns {string}
 */
export const getDays = (days: number) =>
  `${strings.PRICE_DAYS_PART_1} ${days} ${strings.PRICE_DAYS_PART_2}${days > 1 ? 's' : ''}`

/**
 * Get short days label.
 *
 * @param {number} days
 * @returns {string}
 */
export const getDaysShort = (days: number) => `${days} ${strings.PRICE_DAYS_PART_2}${days > 1 ? 's' : ''}`

/**
 * Get cancellation option label.
 *
 * @param {number} cancellation
 * @param {string} language
 * @param {boolean} hidePlus
 * @returns {string}
 */
export const getCancellationOption = (cancellation: number, language: string, hidePlus: boolean) => {
  const fr = BookCarsHelper.isFrench(language)

  if (cancellation === -1) {
    return strings.UNAVAILABLE
  } if (cancellation === 0) {
    return `${strings.INCLUDED}${fr ? 'e' : ''}`
  }
  return `${hidePlus ? '' : '+ '}${BookCarsHelper.formatPrice(cancellation, commonStrings.CURRENCY, language)}`
}

/**
 * Get amendments option label.
 *
 * @param {number} amendments
 * @param {string} language
 * @param {boolean} hidePlus
 * @returns {string}
 */
export const getAmendmentsOption = (amendments: number, language: string, hidePlus: boolean) => {
  const fr = BookCarsHelper.isFrench(language)

  if (amendments === -1) {
    return `${strings.UNAVAILABLE}${fr ? 's' : ''}`
  } if (amendments === 0) {
    return `${strings.INCLUDED}${fr ? 'es' : ''}`
  }
  return `${hidePlus ? '' : '+ '}${BookCarsHelper.formatPrice(amendments, commonStrings.CURRENCY, language)}`
}

/**
 * Get collision damage waiver option label.
 *
 * @param {number} collisionDamageWaiver
 * @param {number} days
 * @param {string} language
 * @param {boolean} hidePlus
 * @returns {string}
 */
export const getCollisionDamageWaiverOption = (collisionDamageWaiver: number, days: number, language: string, hidePlus: boolean) => {
  const fr = BookCarsHelper.isFrench(language)

  if (collisionDamageWaiver === -1) {
    return strings.UNAVAILABLE
  } if (collisionDamageWaiver === 0) {
    return `${strings.INCLUDED}${fr ? 'e' : ''}`
  }
  return `${hidePlus ? '' : '+ '}${BookCarsHelper.formatPrice(collisionDamageWaiver * days, commonStrings.CURRENCY, language)} (${BookCarsHelper.formatPrice(collisionDamageWaiver, commonStrings.CURRENCY, language)}${commonStrings.DAILY})`
}

/**
 * Get theft protection option label.
 *
 * @param {number} theftProtection
 * @param {number} days
 * @param {string} language
 * @param {boolean} hidePlus
 * @returns {string}
 */
export const getTheftProtectionOption = (theftProtection: number, days: number, language: string, hidePlus: boolean) => {
  const fr = BookCarsHelper.isFrench(language)

  if (theftProtection === -1) {
    return strings.UNAVAILABLE
  } if (theftProtection === 0) {
    return `${strings.INCLUDED}${fr ? 'e' : ''}`
  }
  return `${hidePlus ? '' : '+ '}${BookCarsHelper.formatPrice(theftProtection * days, commonStrings.CURRENCY, language)} (${BookCarsHelper.formatPrice(theftProtection, commonStrings.CURRENCY, language)}${commonStrings.DAILY})`
}

/**
 * Get full insurance option label.
 *
 * @param {number} fullInsurance
 * @param {number} days
 * @param {string} language
 * @param {boolean} hidePlus
 * @returns {string}
 */
export const getFullInsuranceOption = (fullInsurance: number, days: number, language: string, hidePlus: boolean) => {
  const fr = BookCarsHelper.isFrench(language)

  if (fullInsurance === -1) {
    return strings.UNAVAILABLE
  } if (fullInsurance === 0) {
    return `${strings.INCLUDED}${fr ? 'e' : ''}`
  }
  return `${hidePlus ? '' : '+ '}${BookCarsHelper.formatPrice(fullInsurance * days, commonStrings.CURRENCY, language)} (${BookCarsHelper.formatPrice(fullInsurance, commonStrings.CURRENCY, language)}${commonStrings.DAILY})`
}

/**
 * Get additional driver option label.
 *
 * @param {number} additionalDriver
 * @param {number} days
 * @param {string} language
 * @param {boolean} hidePlus
 * @returns {string}
 */
export const getAdditionalDriverOption = (additionalDriver: number, days: number, language: string, hidePlus: boolean) => {
  if (additionalDriver === -1) {
    return strings.UNAVAILABLE
  } if (additionalDriver === 0) {
    return strings.INCLUDED
  }
  return `${hidePlus ? '' : '+ '}${BookCarsHelper.formatPrice(additionalDriver * days, commonStrings.CURRENCY, language)} (${BookCarsHelper.formatPrice(additionalDriver, commonStrings.CURRENCY, language)}${commonStrings.DAILY})`
}

/**
 * Get birthdate error message.
 *
 * @param {number} minimumAge
 * @returns {string}
 */
export const getBirthDateError = (minimumAge: number) =>
  `${commonStrings.BIRTH_DATE_NOT_VALID_PART1} ${minimumAge} ${commonStrings.BIRTH_DATE_NOT_VALID_PART2}`

/**
 * Check whether a car option is available or not.
 *
 * @param {(BookCarsTypes.Car | undefined)} car
 * @param {string} option
 * @returns {boolean}
 */
export const carOptionAvailable = (car: BookCarsTypes.Car | undefined, option: string) =>
  car && option in car && (car[option] as number) > -1

/**
 * Validate URL string.
 *
 * @param {string} url
 * @returns {boolean}
 */
export const isValidURL = (url: string) => validator.isURL(url, { protocols: ['http', 'https'] })
