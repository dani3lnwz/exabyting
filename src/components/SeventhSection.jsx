import stripe1 from '../assets/strip1.png'
import stripe2 from '../assets/stripe2.png'
import CustomCard from './CustomCard';

export default function SeventhSection() {
  return (
    <section className="container mx-auto flex justify-between mt-[155px] items-center px-[50px]">
      <div className="w-[470px] ">
        <h1 className="text-[51px]">Consectetur adipiscing elit</h1>
        <p>
          Convallis a cras semper auctor neque. Fringilla est ullamcorper eget
          nulla facilisi etiam dignissim viverra
        </p>
      </div>

      <div className="flex">
        <div className="mr-[50px]">
          <CustomCard className="w-[185px] h-[200px]">
            <img src={stripe1} alt="" />
          </CustomCard>
          <CustomCard className="w-[185px] h-[46px] rounded-[10px] mt-[17px]">
            <h1 className="text-primary font-semibold">First Touch</h1>
          </CustomCard>
        </div>
        <div>
          <CustomCard className="w-[185px] h-[200px]">
            <img src={stripe2} alt="" />
          </CustomCard>
          <CustomCard className="w-[185px] h-[46px] rounded-[10px] mt-[17px]">
            <h1 className="text-[#FFC646] font-semibold">Last Touch</h1>
          </CustomCard>
        </div>
      </div>

      <div className="w-[190px] h-[200px] border-[2px] rounded-full shadow-md flex justify-center">
        <div>
          <h1 className="text-[80px] text-center">3</h1>
          <h2 className="text-3xl -mt-6 text-center">+ Custom Ones</h2>
        </div>
      </div>
    </section>
  );
}
