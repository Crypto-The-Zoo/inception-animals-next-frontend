import type { NextPage } from "next"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import HomePage from "../components/Homepage"

const Home: NextPage = () => {
  return (
    <div className="w-full max-h-screen">
      <Navigation />
      <HomePage />
      <Footer />
    </div>
  )
}

export default Home
