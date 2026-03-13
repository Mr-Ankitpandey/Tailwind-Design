import Navbar from "../../components/Navbar"
import About from "./sections/About copy"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import LimitedOffer from "./sections/LimitedOffer"
import Shop from "./sections/Shop"
import Testimonial from "./sections/Testimonial"

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-20.5 md:gap[132px]">
    <div className='px-5 lg:px-18.75 lg:py-12.5'>
      <Navbar/>
      <main className="flex flex-col gap-5">
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
