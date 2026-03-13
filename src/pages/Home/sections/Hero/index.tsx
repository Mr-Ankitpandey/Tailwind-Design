import Button from "../../../../components/base/Button";
import SendIcon from "../../../../assets/icons/send.png";
import SendArrow from "../../../../assets/icons/sendarrow.png";
import SendWhite from "../../../../assets/icons/sendwhite.png";
import HeroImage1 from "../../../../assets/images/Group 6270.png";
import HeroImage2 from "../../../../assets/images/Frame 6269 (1).png";

const Hero = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-25">
      <div className="flex bg-[#fff6fd] bg-[url('/bg-image.png')] bg-position-[-160px_240px] bg-no-repeat">
        <div className="px-2 py-19.5" >
          <div className="flex flex-col gap-10">
            <div >
              <h2 className="text-[57px] leading-15 font-400">
                Glow Beyond
                <span>
                  <img className="hidden lg:block" src={SendIcon} alt="send" />
                </span>
                <span className="block">Expectations</span>
              </h2>
              <p className="text-[19px] mt-4 mr-8">
                Clean, effective, and cruelty-free skincare made to deliver
                visible results.
              </p>
            </div>
            <div>
              <Button className=" rounded-[72px] w-full text-[32px] text-center px-5 py-2.5 flex justify-center items-center bg-black text-white">Shop Now <span><img className="w-8.75 ml-2" src={SendWhite} alt="sendArrow" /></span></Button>
            </div>
          </div>
        </div>

        <div>
          <img className="hidden md:block" src={HeroImage1} alt="heroImage1" />
        </div>
      </div>

      <div className=" lg:px-12.5 lg:py-10 md:px-8 md:py-6 bg-[#F0F0F0] ">
        <div className="flex flex-col gap-6 md:gap-12.5 px-2 py-6">
          <h1 className="text-[30px] md:text-[35px] lg:text[50px]">Why Choose Xtragleam?</h1>
          <div className="md:flex flex flex-col gap-6">
            <div>
              <img src={HeroImage2} alt="heroImage2" />
            </div>
            <div className="flex flex-col gap-7.5">
              <div>
                <p className="text-[20px]">Struggling with acne issues?</p>
                <p className="text-[16px] mt-2.5 leading-[150%] text-[#6b6b6c]">
                  At Xtragleam Skincare, we understand how frustrating acne can
                  be, and we're here to help you regain confidence in your skin.
                  Our carefully designed recovery process targets acne at its root
                  while soothing and nourishing your skin for long-term health.
                </p>
              </div>
              <div >
                <Button className="flex items-center gap-2 bg-[#ffffff] px-2.5 py-3 text-[22px] rounded-[50px]">
                  Explore Our Range
                  <span>
                    <img className="w-7" src={SendArrow} alt="sendicon" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
