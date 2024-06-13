import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as BookCarsTypes from ':BookCars-types'

import * as helper from '../common/helper'

interface BookingStatusProps {
  style: object
  status: BookCarsTypes.BookingStatus
}

const BookingStatus = ({
  style,
  status
}: BookingStatusProps) => (
    <View
      style={{
        ...styles.container,
        ...style,
        backgroundColor:
          status === BookCarsTypes.BookingStatus.Void
            ? '#999'
            : status === BookCarsTypes.BookingStatus.Pending
              ? '#e98003'
              : status === BookCarsTypes.BookingStatus.Deposit
                ? '#22bba7'
                : status === BookCarsTypes.BookingStatus.Paid
                  ? '#77bc23'
                  : status === BookCarsTypes.BookingStatus.Reserved
                    ? '#188ace'
                    : status === BookCarsTypes.BookingStatus.Cancelled
                      ? '#bc2143'
                      : 'transparent',
      }}
    >
      <Text style={styles.text}>{helper.getBookingStatus(status)}</Text>
    </View>
  )

const styles = StyleSheet.create({
  container: {
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '400',
  },
})

export default BookingStatus
