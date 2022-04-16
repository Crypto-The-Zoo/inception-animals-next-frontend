import type { NextPage } from "next"
import styles from "../styles/Home.module.css"
import Navigation from "../components/Navigation"
import Banner from "../components/Banner"
import Parchment from "../components/Parchment"
import Footer from "../components/Footer"

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Navigation />
      <Banner />
      <Parchment />
      <Footer />
    </div>
  )
}

export default Home
