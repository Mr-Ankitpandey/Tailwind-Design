import Navbar from "../../components/Navbar"
import About from "./sections/About copy"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import LimitedOffer from "./sections/LimitedOffer"
import Shop from "./sections/Shop"
import Testimonial from "./sections/Testimonial"

const Home = () => {
  return (
    <div className="flex flex-col gap-20.5 md:gap-33">
    <div className='flex flex-col gap-2.5 lg:gap-19 max-w-360 mx-auto w-full px-5 xl:px-18.75 xl:pt-12.5 lg:px-12 lg:py-10'>
      <Navbar/>
      <main className="flex flex-col gap-5 md:gap-25">
      <Hero/>
      <About/>
      <Shop/>
      <Testimonial/>
      <LimitedOffer/>
      </main>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
