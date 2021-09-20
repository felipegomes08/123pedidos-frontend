import { useState } from 'react'

import { Cascader } from 'antd'

import styles from './styles.module.scss'

export default function ComboBox({ className, placeholder, subtitle, options }) {
  const [value, setValue] = useState(1)
  console.log(value)
  const onChange = e => setValue(e.target?.value)
  return (
    <div className={className}>
      <p className={styles.sub}>{subtitle}</p>
      <Cascader
        bordered={false}
        className={styles.comboBox}
        options={options}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}
