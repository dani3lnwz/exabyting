import CustomButton from "./CustomButton";
import SocialLogo from "./SocialLogo";

export default function ThirdSection() {
  return (
    <section className="bg-white container mx-auto">
      <div className="grid max-w-screen-full px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-0 lg:grid-cols-12">
        <div className="mr-auto pl-[10px] place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-1 md:text-5xl xl:text-[45px]">
            Sed ut perspiciatis unde omnis iste natus error.{" "}
            <span className="font-extrabold">Try out!</span>
          </h1>
          <p className="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore ullamco esse cillium
          </p>
          <div className="flex items-center">
            <CustomButton
              variant="filled"
              className="w-[175px] h-[52px] justify-center ml-[16px] items-center"
            >
              Try Out Now
            </CustomButton>
          </div>
        </div>
        <div className="hidden w-full  lg:col-span-5 lg:flex ml-[16px]">
          <SocialLogo></SocialLogo>
        </div>
      </div>
    </section>
  );
}
