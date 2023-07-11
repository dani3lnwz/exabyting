import EightSection from "../components/EightSection";
import FifthSection from "../components/FifthSection";
import Footer from "../components/Footer";
import FourthSection from "../components/FourthSection";
import Hero from "../components/Hero";
import NavbarMenu from "../components/Navbar";
import NinethSection from "../components/NinethSection";
import SecondSection from "../components/SecondSection";
import SeventhSection from "../components/SeventhSection";
import SixthSection from "../components/SixthSection";
import TenthSection from "../components/TenthSection";
import ThirdSection from "../components/ThirdSection";

export default function Home() {
  return (
    <div>
      <NavbarMenu></NavbarMenu>
      <Hero></Hero>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <FourthSection></FourthSection>
      <FifthSection></FifthSection>
      <SixthSection></SixthSection>
      <SeventhSection></SeventhSection>
      <EightSection></EightSection>
      <NinethSection></NinethSection>
      <TenthSection></TenthSection>
      <Footer></Footer>
    </div>
  );
}
