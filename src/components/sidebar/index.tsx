import { UserOutlined } from '@ant-design/icons'
import { Avatar, Row, Col } from 'antd'

import styles from './styles.module.css'

export default function Sidebar({ children }) {
  return (
    <div className={styles.container}>
      <Row style={{ flex: 1 }}>
        <Col flex='100px'>
          <Avatar size={64} icon={<UserOutlined />} />
        </Col>
        <Col flex='auto' className={styles.content}>
          {children}
        </Col>
      </Row>
    </div>
  )
}
