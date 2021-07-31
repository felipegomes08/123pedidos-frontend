import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <RocketseatLogo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>
    </div>
  )
}

export default Home
