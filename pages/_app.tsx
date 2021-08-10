import { ConfigProvider } from 'antd'

import 'antd/dist/antd.css'
import ptBR from 'antd/lib/locale/pt_BR'
import { AppProps } from 'next/app'

// import GlobalStyle from '../styles/global'
// import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ConfigProvider locale={ptBR}>
      <Component {...pageProps} />
      {/* <GlobalStyle /> */}
    </ConfigProvider>
  )
}

export default MyApp
