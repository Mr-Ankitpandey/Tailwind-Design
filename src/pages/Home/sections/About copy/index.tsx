import Button from "../../../../components/base/Button/index";
import AboutImage from "../../../../assets/images/R.png";
import Card from "./CardComponent/index";
import About2 from "../../../../assets/images/Pic About 2.png";

const About = () => {
  return (
    <div className="flex flex-col gap-8"  id="about">
      <div>
        <div className="flex flex-col gap-5">
          <div>
            <Button className="px-6 py-3 bg-[#f8f9fe] text-[18px] border rounded-sm">ABOUT US</Button>
          </div>
          <h1 className="text-2xl lg:text-5xl font-bold">How much is your property worth now?</h1>
          <p className="text-[16px]">
            We have built our reputation as true local area experts. We have
            gained more knowledge about buyer interests, our neighborhood and
            the market than any other brand because we live locally and work
            for local people.
          </p>
        </div>
        <div>
          <div className="flex gap-2">
          <Card
            h3="178K+"
            p="Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero."
          />
          <Card
            h3="362"
            p="Lorem ipsum dolor amet, consectetur adipiscing elit."
          />
          </div>
          <div className="flex items-center mt-1 px-6 py-6 bg-[#fafafa] rounded-sm">
            <div className="max-w-[50%] " >
              <h3 className="text-2xl font-bold">Title</h3>
              <p>
                Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus
                in libero.
              </p>
            </div>
            <div className="max-w-[50%]">
            <img
              src={About2}
              alt="property thumbnail"
              className="object-contain"
            />
            </div>
          </div>
        </div>
      </div>
      <div >
        <div>
          <img src={AboutImage} alt="About interior" />
        </div>
      </div>
    </div>
  );
};

export default About;
