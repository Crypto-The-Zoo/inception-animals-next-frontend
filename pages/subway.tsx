import type { NextPage } from "next"
import styles from "../styles/Home.module.css"
import Navigation from "../components/Navigation"
import Banner from "../components/Banner"
import SubwayParchment from "../components/SubwayParchment"
import Footer from "../components/Footer"

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Navigation />
      {/* <Banner /> */}
      <SubwayParchment />
      {/* <Footer /> */}
    </div>
  )
}

export default Home
