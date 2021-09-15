import { ReactNode } from 'react'

import { StepBackwardOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Row, Col } from 'antd'

import styles from './styles.module.scss'

export interface SidebarProps {
  children: ReactNode
  footer?: ReactNode
}

export default function Sidebar({ children, footer }: SidebarProps) {
  return (
    <div className={styles.container}>
      <Row className={styles.row}>
        <Col flex='100px' className={styles.sidebar}>
          <Avatar size={85} icon={<UserOutlined />} className={styles.avatar} />
          <div className={styles.menu}>
            <StepBackwardOutlined className={styles.icon} />
            <StepBackwardOutlined className={styles.icon} />
            <StepBackwardOutlined className={styles.icon} />
            <StepBackwardOutlined className={styles.icon} />
            <StepBackwardOutlined className={styles.icon} />
            <StepBackwardOutlined className={styles.icon} />
            <StepBackwardOutlined className={styles.icon} />
            <StepBackwardOutlined className={styles.icon} />
            <StepBackwardOutlined className={styles.icon} />
          </div>
        </Col>
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
