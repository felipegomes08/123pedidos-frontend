import { DatePicker } from 'antd'
import moment from 'moment'

import styles from './styles.module.scss'

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']

export default function DatePick({ className, subtitle }) {
  return (
    <div className={className}>
      <p className={styles.sub}>{subtitle}</p>
      <DatePicker
        className={styles.date}
        defaultValue={moment('01/01/2021', dateFormatList[0])}
        format={dateFormatList}
      />
    </div>
  )
}
