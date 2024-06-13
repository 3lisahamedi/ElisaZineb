import React, { useState, useEffect } from 'react'
import {
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material'
import * as BookCarsTypes from ':BookCars-types'
import { strings } from '../lang/cars'

interface CarTypeListProps {
  value?: string
  required?: boolean
  label?: string
  variant?: 'filled' | 'standard' | 'outlined'
  onChange?: (value: string) => void
}

const CarTypeList = ({
  value: carTypeValue,
  required,
  label,
  variant,
  onChange
}: CarTypeListProps) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(carTypeValue || '')
  }, [carTypeValue])

  const handleChange = (e: SelectChangeEvent<string>) => {
    const _value = e.target.value || ''
    setValue(_value)

    if (onChange) {
      onChange(_value)
    }
  }

  return (
    <div>
      <InputLabel className={required ? 'required' : ''}>{label}</InputLabel>
      <Select label={label} value={value} onChange={handleChange} variant={variant || 'standard'} required={required} fullWidth>
        <MenuItem value={BookCarsTypes.CarType.Diesel}>{strings.DIESEL}</MenuItem>
        <MenuItem value={BookCarsTypes.CarType.Gasoline}>{strings.GASOLINE}</MenuItem>
        <MenuItem value={BookCarsTypes.CarType.Electric}>{strings.ELECTRIC}</MenuItem>
        <MenuItem value={BookCarsTypes.CarType.Hybrid}>{strings.HYBRID}</MenuItem>
        <MenuItem value={BookCarsTypes.CarType.PlugInHybrid}>{strings.PLUG_IN_HYBRID}</MenuItem>
        <MenuItem value={BookCarsTypes.CarType.Unknown}>{strings.UNKNOWN}</MenuItem>
      </Select>
    </div>
  )
}

export default CarTypeList
