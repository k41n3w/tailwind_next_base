import Head from 'next/head'
import '../styles/main.css'

const Logo = () => (
  <>
    <img src="/new_logo.png" width={150} className="p-2 hidden md:inline-block" />
    <img src="/codar.png" width={50} className="p-2 md:hidden" />
  </>
)

const Menu = () => (
  <div className="p-2 flex items-center text-red">
    <a href="https://github.com/k41n3w" target="_blank">
      github
    </a>

    <a href="https://medium.com/@caio_ramos" target="_blank">
      medium
    </a>

    <a href="https://twitter.com/CaioRam51024555" target="_blank">
      twitter
    </a>
  </div>
)

const Banner = () => (
  <div className="container max-w-5xl m-auto p-6 flex-1 flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
    <span className="text-gray">Oi meu nome é Caio Ramos</span>
    <div className="uppdercase text-4xl font-extrabold leading-snug">
      Sou Engenheiro de <span className="text-red">Software</span>
    </div>
  </div>
)

const Header = () => (
  <div className="p-2 container max-w-5xl m-auto flex justify-between items-center">
    <Logo />
    <Menu />
  </div>
)

const Home = () => (
  <div
    className="flex flex-col flex-1"
    style={{ background: 'url(/background-new.jpg) no-repeat center/cover' }}
  >
    <Head>
      <title>k41n3w</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <Banner />
  </div>
)

export default Home
