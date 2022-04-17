import type { NextPage } from "next"
import Navigation from "../components/Navigation"
import CityParchment from "../components/CityParchment"
import Footer from "../components/Footer"

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Navigation />
      <CityParchment />
    </div>
  )
}

export default Home
