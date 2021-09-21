import { useState } from 'react'

import { Radio } from 'antd'

import styles from './styles.module.scss'

interface DataProps {
  value: string | number
  label: string
}
interface RadioGroupProps {
  label?: string
  data: DataProps[]
}

export default function RadioGroup({ data, label }: RadioGroupProps) {
  const [value, setValue] = useState(1)
  const onChange = e => setValue(e.target.value)
  return (
    <div className={styles.container}>
      <p className={styles.sub}>{label}</p>
      <Radio.Group className={styles.radioGroup} onChange={onChange} value={value}>
        <div className={styles.divRadios}>
          {data?.map((radio, index) => (
            <Radio
              className={value === radio.value ? styles.selected : styles.radioBottom}
              key={index}
              value={radio.value}
            >
              {radio.label}
            </Radio>
          ))}
        </div>
      </Radio.Group>
    </div>
  )
}
