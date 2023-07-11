import HeroImage from "../assets/heroImage.png";
import CustomButton from "./CustomButton";
import playIcon from "../assets/playButton.png";

export default function Hero() {
  return (
    <section className="bg-white container mx-auto">
      <div className="grid max-w-screen-full px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-0 lg:grid-cols-12">
        <div className="mr-auto pl-[110px] place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-wide leading-10 md:text-5xl xl:text-8xl">
            <span className="font-normal">Lore</span> ipsum.{" "}
            <span className="font-normal">Dolor</span> sit.
          </h1>
          <p className="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatu. Sed ut perspiciatis unde
            omnis iste natus error.
          </p>
          <div className="flex items-center">
            <CustomButton
              variant="outlined"
              className="text-black w-[238px] h-[52px] justify-center border border-borderColor "
            >
              Viverra orci sagittis
            </CustomButton>
            <CustomButton
              variant="filled"
              className="w-[238px] h-[52px] justify-center ml-[16px] items-center"
            >
              {" "}
              <img className="mr-2" src={playIcon} alt="" />
              Get a Demo
            </CustomButton>
          </div>
        </div>
        <div className="hidden w-full  lg:col-span-5 lg:flex ml-[30px]">
          <img src={HeroImage} alt="mockup" />
        </div>
      </div>
    </section>
  );
}
