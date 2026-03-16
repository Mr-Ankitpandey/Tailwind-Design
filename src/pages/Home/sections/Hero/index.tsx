import Button from "../../../../components/base/Button";
import SendIcon from "../../../../assets/icons/send.png";
import SendArrow from "../../../../assets/icons/sendarrow.png";
import SendWhite from "../../../../assets/icons/sendwhite.png";
import HeroImage1 from "../../../../assets/images/Group 6270.png";
import HeroImage2 from "../../../../assets/images/Frame 6269 (1).png";

const Hero = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-25">
      <div className="flex bg-[#fff6fd] bg-[url('/bg-image.png')] md:bg-position-[-10px_240px] bg-position-[-140px_240px] bg-no-repeat flex-col md:flex-row md:items-center md:rounded-[36px] ">
        <div className="px-2 py-19.5 md:px-15 lg:px-17.5 md:py-16 md:pb-20 md:w-[55%] lg:w-[60%] md:z-10" >
          <div className="flex flex-col gap-10 md:gap-7 lg:gap-10">
            <div >
              <h2 className="text-[57px] leading-15 font-400 md:text-[50px] lg:text-[60px] flex flex-col md:block">
                <span className="md:flex md:items-center md:gap-4 md:whitespace-nowrap">
                  Glow Beyond
                  <img className="hidden md:block w-9 md:w-10 lg:w-11.25 object-contain" src={SendIcon} alt="send" />
                </span>
                <span className="xl:pl-59.5">Expectations</span>
              </h2>
              <p className="text-[19px] mt-3.75 md:text-[22px] lg:text-[30px] md:font-light md:pr-4  md:leading-[120%]">
                Clean, effective, and cruelty-free skincare made to deliver
                visible results.
              </p>
            </div>
            <div className="md:mt-2">
              <Button className=" rounded-[72px] w-full text-[32px] text-center px-5 py-2.5 flex justify-center items-center bg-black text-white md:w-auto  md:px-5 md:py-2.5 md:text-[32px]">
                Shop Now
                <span><img className="w-8.75 ml-2 md:w-10 md:ml-3" src={SendWhite} alt="sendArrow" /></span>
              </Button>
            </div>
          </div>
        </div>

        <div className="md:w-[50%] md:flex md:justify-end md:items-end  md:pt-14">
          <img className="hidden md:block w-full md:max-w-75 lg:max-w-110.75 object-cover object-bottom-right" src={HeroImage1} alt="heroImage1" />
        </div>
      </div>

      <div className=" lg:py-12.5 lg:px-10 md:py-8 md:px-6 bg-[#F0F0F0] ">
        <div className="flex flex-col gap-6 lg:gap-12.5 px-2 py-6 md:px-0 md:py-0">
          <h1 className="text-[30px] md:text-[35px] lg:text-[50px]">Why Choose Xtragleam?</h1>
          <div className="md:flex-row flex flex-col gap-6">
            <div>
              <img src={HeroImage2} alt="heroImage2" />
            </div>
            <div className="flex flex-col gap-7.5 lg:max-w-[50%] md:my-4">
              <div>
                <p className="text-[20px] lg:text-[27px] lg:leading-[120%]">Struggling with acne issues?</p>
                <p className="text-[16px] mt-2.5 leading-[150%] text-[#6b6b6c] lg:text-[27px] lg:leading-[150%]">
                  At Xtragleam Skincare, we understand how frustrating acne can
                  be, and we're here to help you regain confidence in your skin.
                  Our carefully designed recovery process targets acne at its root
                  while soothing and nourishing your skin for long-term health.
                </p>
              </div>
              <div >
                <Button className="flex items-center gap-2 bg-[#ffffff] px-2.5 py-3 text-[22px] rounded-[50px] lg:px-5.25 lg:py-2.75 lg:text-[32px]">
                  Explore Our Range
                  <span>
                    <img className="w-7 lg:w-10" src={SendArrow} alt="sendicon" />
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
