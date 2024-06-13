import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import * as BookCarsTypes from ':BookCars-types'
import * as BookCarsHelper from ':BookCars-helper'

import i18n from '../lang/i18n'
import Accordion from './Accordion'
import Link from './Link'
import Switch from './Switch'

interface CarTypeFilterProps {
  visible?: boolean
  style?: object
  onChange?: (values: BookCarsTypes.CarType[]) => void
}

const allTypes = BookCarsHelper.getAllCarTypes()

const CarTypeFilter = ({
  visible,
  style,
  onChange
}: CarTypeFilterProps) => {
  const [diesel, setDiesel] = useState(true)
  const [gasoline, setGasoline] = useState(true)
  const [electric, setElectric] = useState(true)
  const [hybrid, setHybrid] = useState(true)
  const [plugInHybrid, setPlugInHybrid] = useState(true)
  const [values, setValues] = useState(allTypes)
  const [allChecked, setAllChecked] = useState(true)

  const onValueChangeDiesel = (checked: boolean) => {
    if (checked) {
      values.push(BookCarsTypes.CarType.Diesel)

      if (values.length === allTypes.length) {
        setAllChecked(true)
      }
    } else {
      values.splice(
        values.findIndex((v) => v === BookCarsTypes.CarType.Diesel),
        1,
      )

      if (values.length === 0) {
        setAllChecked(false)
      }
    }

    setDiesel(checked)
    setValues(values)
    if (onChange) {
      onChange(BookCarsHelper.clone(values))
    }
  }

  const onValueChangeGasoline = (checked: boolean) => {
    if (checked) {
      values.push(BookCarsTypes.CarType.Gasoline)

      if (values.length === allTypes.length) {
        setAllChecked(true)
      }
    } else {
      values.splice(
        values.findIndex((v) => v === BookCarsTypes.CarType.Gasoline),
        1,
      )

      if (values.length === 0) {
        setAllChecked(false)
      }
    }

    setGasoline(checked)
    setValues(values)
    if (onChange) {
      onChange(BookCarsHelper.clone(values))
    }
  }

  const onValueChangeElectric = (checked: boolean) => {
    if (checked) {
      values.push(BookCarsTypes.CarType.Electric)

      if (values.length === allTypes.length) {
        setAllChecked(true)
      }
    } else {
      values.splice(
        values.findIndex((v) => v === BookCarsTypes.CarType.Electric),
        1,
      )

      if (values.length === 0) {
        setAllChecked(false)
      }
    }

    setElectric(checked)
    setValues(values)
    if (onChange) {
      onChange(BookCarsHelper.clone(values))
    }
  }

  const onValueChangeHybrid = (checked: boolean) => {
    if (checked) {
      values.push(BookCarsTypes.CarType.Hybrid)

      if (values.length === allTypes.length) {
        setAllChecked(true)
      }
    } else {
      values.splice(
        values.findIndex((v) => v === BookCarsTypes.CarType.Hybrid),
        1,
      )

      if (values.length === 0) {
        setAllChecked(false)
      }
    }

    setHybrid(checked)
    setValues(values)
    if (onChange) {
      onChange(BookCarsHelper.clone(values))
    }
  }

  const onValueChangePlugInHybrid = (checked: boolean) => {
    if (checked) {
      values.push(BookCarsTypes.CarType.PlugInHybrid)

      if (values.length === allTypes.length) {
        setAllChecked(true)
      }
    } else {
      values.splice(
        values.findIndex((v) => v === BookCarsTypes.CarType.PlugInHybrid),
        1,
      )

      if (values.length === 0) {
        setAllChecked(false)
      }
    }

    setPlugInHybrid(checked)
    setValues(values)
    if (onChange) {
      onChange(BookCarsHelper.clone(values))
    }
  }

  return (
    visible && (
      <View style={{ ...styles.container, ...style }}>
        <Accordion style={styles.accordion} title={i18n.t('ENGINE')}>
          <View style={styles.contentContainer}>
            <Switch style={styles.component} textStyle={styles.text} value={diesel} label={i18n.t('DIESEL')} onValueChange={onValueChangeDiesel} />
            <Switch style={styles.component} textStyle={styles.text} value={gasoline} label={i18n.t('GASOLINE')} onValueChange={onValueChangeGasoline} />
            <Switch style={styles.component} textStyle={styles.text} value={electric} label={i18n.t('ELECTRIC')} onValueChange={onValueChangeElectric} />
            <Switch style={styles.component} textStyle={styles.text} value={hybrid} label={i18n.t('HYBRID')} onValueChange={onValueChangeHybrid} />
            <Switch style={styles.component} textStyle={styles.text} value={plugInHybrid} label={i18n.t('PLUG_IN_HYBRID')} onValueChange={onValueChangePlugInHybrid} />
          </View>
          <Link
            style={styles.link}
            textStyle={styles.linkText}
            label={allChecked ? i18n.t('UNCHECK_ALL') : i18n.t('CHECK_ALL')}
            onPress={() => {
              if (allChecked) {
                setDiesel(false)
                setGasoline(false)
                setElectric(false)
                setHybrid(false)
                setPlugInHybrid(false)
                setAllChecked(false)
                setValues([])
              } else {
                const _values = [BookCarsTypes.CarType.Diesel, BookCarsTypes.CarType.Gasoline]
                setDiesel(true)
                setGasoline(true)
                setElectric(true)
                setHybrid(true)
                setPlugInHybrid(true)
                setAllChecked(true)
                setValues(_values)
                if (onChange) {
                  onChange(BookCarsHelper.clone(_values))
                }
              }
            }}
          />
        </Accordion>
      </View>
    )
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  accordion: {
    width: '100%',
    maxWidth: 480,
  },
  component: {
    marginTop: 0,
  },
  text: {
    fontSize: 12,
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    fontSize: 12,
  },
})

export default CarTypeFilter
