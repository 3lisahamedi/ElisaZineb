import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import * as BookCarsTypes from ':BookCars-types'
import * as BookCarsHelper from ':BookCars-helper'

import * as helper from '../common/helper'
import * as env from '../config/env.config'
import i18n from '../lang/i18n'
import * as SupplierService from '../services/SupplierService'
import Link from './Link'
import Switch from './Switch'
import Accordion from './Accordion'

interface SupplierFilterProps {
  visible?: boolean
  style?: object
  onLoad?: (checkedSuppliers: string[]) => void
  onChange?: (checkedSuppliers: string[]) => void
}

const SupplierFilter = ({
  visible,
  style,
  onLoad,
  onChange
}: SupplierFilterProps) => {
  const [suppliers, setSuppliers] = useState<BookCarsTypes.User[]>([])
  const [checkedSuppliers, setCheckedSuppliers] = useState<string[]>([])
  const [allChecked, setAllChecked] = useState(true)

  const init = async () => {
    try {
      const allSuppliers = await SupplierService.getAllSuppliers()
      if (allSuppliers) {
        const _suppliers = allSuppliers.map((supplier: BookCarsTypes.User) => ({
          ...supplier,
          checked: true,
        }))
        const _checkedSuppliers = BookCarsHelper.flattenSuppliers(_suppliers)
        setSuppliers(_suppliers)
        setCheckedSuppliers(_checkedSuppliers)
        if (onLoad) {
          onLoad(_checkedSuppliers)
        }
      } else {
        helper.error()
      }
    } catch (err) {
      helper.error(err)
    }
  }

  useEffect(() => {
    init()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    visible && (suppliers.length > 1 && suppliers.length < 17) && (
      <View style={{ ...styles.container, ...style }}>
        <Accordion style={styles.accordion} title={i18n.t('SUPPLIER')}>
          <View style={styles.suppliers}>
            {suppliers.map((supplier) => (
              supplier._id && typeof supplier.checked !== 'undefined'
              && (
                <View key={supplier._id} style={styles.supplier}>
                  <Switch
                    value={supplier.checked}
                    onValueChange={(checked) => {
                      if (checked) {
                        supplier.checked = true
                        setSuppliers(BookCarsHelper.clone(suppliers))
                        checkedSuppliers.push(supplier._id as string)

                        if (checkedSuppliers.length === suppliers.length) {
                          setAllChecked(true)
                        }
                      } else {
                        supplier.checked = false
                        setSuppliers(BookCarsHelper.clone(suppliers))
                        const index = checkedSuppliers.indexOf(supplier._id as string)
                        checkedSuppliers.splice(index, 1)

                        if (checkedSuppliers.length === 0) {
                          setAllChecked(false)
                        }
                      }

                      if (onChange) {
                        onChange(BookCarsHelper.clone(checkedSuppliers))
                      }
                    }}
                  >
                    <Image
                      style={styles.image}
                      source={{
                        uri: BookCarsHelper.joinURL(env.CDN_USERS, supplier.avatar),
                      }}
                    />
                  </Switch>
                </View>
              )
            ))}
          </View>
          <Link
            style={styles.link}
            textStyle={styles.linkText}
            label={allChecked ? i18n.t('UNCHECK_ALL') : i18n.t('CHECK_ALL')}
            onPress={() => {
              let _checkedSuppliers: string[] = []
              if (allChecked) {
                suppliers.forEach((supplier) => {
                  supplier.checked = false
                })
                setAllChecked(false)
                setSuppliers(BookCarsHelper.clone(suppliers))
                setCheckedSuppliers(_checkedSuppliers)
              } else {
                suppliers.forEach((supplier) => {
                  supplier.checked = true
                })
                setAllChecked(true)
                setSuppliers(BookCarsHelper.clone(suppliers))
                _checkedSuppliers = BookCarsHelper.clone(BookCarsHelper.flattenSuppliers(suppliers))
                setCheckedSuppliers(_checkedSuppliers)

                if (onChange) {
                  onChange(_checkedSuppliers)
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
  accordion: {
    width: '100%',
    maxWidth: 480,
  },
  suppliers: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: 300,
  },
  supplier: {
    width: '50%',
    marginBottom: 7,
  },
  image: {
    width: env.SUPPLIER_IMAGE_WIDTH,
    height: env.SUPPLIER_IMAGE_HEIGHT,
    flex: 1,
    resizeMode: 'contain',
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    fontSize: 12,
  },
})

export default SupplierFilter
