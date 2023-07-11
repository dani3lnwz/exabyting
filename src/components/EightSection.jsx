import googleIcon from "../assets/s1.png";
import fbIcon from "../assets/s2.png";
import shopifyIcon from "../assets/s3.png";
import CustomCard from "./CustomCard";

export default function EightSection() {
  return (
    <section className="container mx-auto mt-[160px]">
      <div className="text-center w-[1170px] mx-auto">
        <h1 className="text-[51px] font-medium">
          Ullamcorper morbi tincidunt ornare massa eget. Quam viverra orci
          sagittis eu volutpat odio
        </h1>
        <p className="w-[815px] text-center mx-auto text-[24px] text-[#181F1B]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>

      <div>
        <div className="flex  gap-y-[55px] justify-center mt-[62px]">
          <CustomCard className="w-[142px] h-[142px] mr-[26px] mt-[5%]">
            <img className="" src={fbIcon} alt="" />
          </CustomCard>
          
          <div>
            <CustomCard className="w-[142px] h-[142px] mb-[26px]">
              <img className="" src={googleIcon} alt="" />
            </CustomCard>

            <CustomCard className="w-[142px] h-[142px]">
              <img className="" src={shopifyIcon} alt="" />
            </CustomCard>
          </div>
        </div>
      </div>
    </section>
  );
}
