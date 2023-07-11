import CustomButton from "./CustomButton";
import chartImg from "../assets/chart.png";
import signbtn from "../assets/signbtn.png";

export default function FifthSection() {
  return (
    <section className="bg-white container mx-auto mt-[160px] lg:flex">
      <div className="grid max-w-screen-full px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-0 lg:grid-cols-12">
        <div className="mr-auto pl-[110px] place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-wide leading-10 md:text-5xl xl:text-5xl">
            Nemo enim ipsam quia
          </h1>
          <p className="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed qu nemo enim
          </p>
          <div className="">
            <div className="flex items-center font-medium w-[510px] h-[72px] border-[2px] rounded-[20px] shadow-md mb-[18px]">
              <img className="p-[21px]" src={signbtn} alt="" />
              <h1>Sed ut perspiciatis unde</h1>
            </div>

            <div className="flex items-center font-medium w-[510px] h-[72px] border-[2px] rounded-[20px] shadow-md mb-[18px]">
              <img className="p-[21px]" src={signbtn} alt="" />
              <h1>Sed ut perspiciatis unde</h1>
            </div>

            <div className="flex items-center font-medium w-[510px] h-[72px] border-[2px] rounded-[20px] shadow-md mb-[18px]">
              <img className="p-[21px]" src={signbtn} alt="" />
              <h1>Sed ut perspiciatis unde</h1>
            </div>

            <div className="flex items-center font-medium w-[510px] h-[72px] border-[2px] rounded-[20px] shadow-md mb-[18px]">
              <img className="p-[21px]" src={signbtn} alt="" />
              <h1>Sed ut perspiciatis unde</h1>
            </div>
          </div>

          <div>
            <CustomButton
              variant="filled"
              className="w-[175px] h-[52px] justify-center items-center font-medium"
            >
              Try Out Now!
            </CustomButton>
          </div>
        </div>
      </div>
      <div className="w-fit mt-[10%]">
        <img src={chartImg} alt="mockup" />
      </div>
    </section>
  );
}
