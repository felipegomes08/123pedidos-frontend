import { ReactNode } from 'react'

import { Row, Col } from 'antd'

import Sidebar from '../Sidebar'

import styles from './styles.module.scss'

export interface SidebarProps {
  children: ReactNode
  footer?: ReactNode
}

export default function Container({ children, footer }: SidebarProps) {
  return (
    <div className={styles.container}>
      <Row className={styles.row}>
        <Sidebar />
        <div className={styles.col}>
          <Col flex='auto' className={styles.content}>
            {children}
          </Col>
          {footer}
        </div>
      </Row>
    </div>
  )
}
