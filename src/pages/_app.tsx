import 'antd/dist/antd.css'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'
import { AppProps } from 'next/app'

import '../styles/global.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ConfigProvider locale={ptBR}>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp
