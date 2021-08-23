import { StepBackwardOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Row, Col } from 'antd'

import styles from './styles.module.css'

export default function Sidebar({ children }) {
  return (
    <div className={styles.container}>
      <Row>
        <Col flex='100px' className={styles.sidebar}>
          <Avatar size={64} icon={<UserOutlined />} />
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
        <Col flex='auto' className={styles.content}>
          {children}
        </Col>
      </Row>
    </div>
  )
}
