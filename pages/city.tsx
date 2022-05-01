import type { NextPage } from "next"
import Navigation from "../components/Navigation"
import CityParchment from "../components/CityParchment"
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
      <CityParchment />
    </div>
  )
}

export default Home
