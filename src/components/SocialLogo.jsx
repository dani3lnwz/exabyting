import googleIcon from "../assets/s1.png";
import fbIcon from "../assets/s2.png";
import shopifyIcon from "../assets/s3.png";
import tiktokIcon from "../assets/s4.png";
import pinterestIcon from "../assets/s5.png";
import twitterIcon from "../assets/s6.png";
import snapIcon from "../assets/s7.png";
import Icon8 from "../assets/s8.png";
import Icon9 from "../assets/s9.png";

export default function SocialLogo() {
  return (
    <section className="mt-10 mb-20 grid grid-cols-3 gap-x-[60px]">
      <div className="grid grid-cols-1 gap-y-[55px]">
        <div className="w-[142px] h-[142px] border-[2px] shadow-lg justify-center items-center flex rounded-[20px]">
          <img className="" src={googleIcon} alt="" />
        </div>
        <div className="w-[142px] h-[142px] border-[2px] shadow-lg justify-center items-center flex rounded-[20px]">
          <img className="" src={fbIcon} alt="" />
        </div>
        <div className="w-[142px] h-[142px] border-[2px] shadow-lg justify-center items-center flex rounded-[20px]">
          <img className="" src={shopifyIcon} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-[55px] pt-20">
        <div className="w-[142px] h-[142px] border-[2px] shadow-lg justify-center items-center flex rounded-[20px]">
          <img className="" src={tiktokIcon} alt="" />
        </div>
        <div className="w-[142px] h-[142px] border-[2px] shadow-lg justify-center items-center flex rounded-[20px]">
          <img className="" src={pinterestIcon} alt="" />
        </div>
        <div className="w-[142px] h-[142px] border-[2px] shadow-lg justify-center items-center flex rounded-[20px]">
          <img className="" src={twitterIcon} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-[55px]">
        <div className="w-[142px] h-[142px] border-[2px] shadow-lg justify-center items-center flex rounded-[20px]">
          <img className="" src={snapIcon} alt="" />
        </div>
        <div className="w-[142px] h-[142px] border-[2px] shadow-lg justify-center items-center flex rounded-[20px]">
          <img className="" src={Icon8} alt="" />
        </div>
        <div className="w-[142px] h-[142px] border-[2px] shadow-lg justify-center items-center flex rounded-[20px]">
          <img className="" src={Icon9} alt="" />
        </div>
      </div>
    </section>
  );
}
