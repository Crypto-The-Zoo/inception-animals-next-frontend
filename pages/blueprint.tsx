import type { NextPage } from "next"
import styles from "../styles/Home.module.css"
import Navigation from "../components/Navigation"
import Banner from "../components/Banner"
import BluePrint from "../components/BluePrint"
import Footer from "../components/Footer"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <div>
        <Head>
          <title>Inception Animals</title>
          <meta property="og:title" content="Inception Animals" key="title" />
          <meta
            property="og:description"
            content="A retro futuristic metaverse brand"
            key="description"
          />
          <meta property="og:url" content="https://www.inceptionanimals.com" />
          <meta
            property="og:image"
            content={
              "https://storage.googleapis.com/inception_public/cyber_hippo.jpg"
            }
          />
        </Head>
      </div>
      <Navigation />
      {/* <Banner /> */}
      <BluePrint />
      {/* <Footer /> */}
    </div>
  )
}

export default Home
