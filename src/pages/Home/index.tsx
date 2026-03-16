import Footer from "../../components/Layout/Footer";
import Navbar from "../../components/Layout/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import LimitedOffer from "./components/LimitedOffer";
import Shop from "./components/Shop";
import Testimonial from "./components/Testimonial";

const Home = () => {
  return (
    <div className="flex flex-col gap-20.5 md:gap-33">
      <div className="flex flex-col gap-2.5 lg:gap-19 max-w-7xl mx-auto w-full px-5 xl:px-18.75 xl:pt-12.5 lg:px-12 lg:pt-10">
        <Navbar />
        <main className="flex flex-col gap-5 md:gap-25">
          <Hero />
          <About />
          <Shop />
          <Testimonial />
          <LimitedOffer />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
