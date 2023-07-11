
import chart2 from '../assets/chart2.png'
import CustomTable from './CustomTable';
export default function SixthSection() {

   const fbData = [
     {
       "Ad name": "All_25+_Static_split_screen",
       Orders: 12,
       ROAS: 3.2,
     },
     {
       "Ad name": "M_25+_Static_split_screen_2",
       Orders: 2,
       ROAS: 1.5,
     },
   ];

   const lgData = [
     {
       "Ad name": "All_25+_Static_split_screen",
       Orders: 10,
       ROAS: 2.8,
     },
     {
       "Ad name": "M_25+_Static_split_screen_2",
       Orders: 8,
       ROAS: 3,
     },
   ];


    const orderTableColumns = [
      { label: "Ad name", value: "Ad name" },
      { label: "Orders", value: "Orders" },
      { label: "ROAS", value: "ROAS" },
    ];
  return (
    <section className="container mx-auto mt-[160px]">
      <div className="text-center w-[870px] mx-auto">
        <h1 className="text-[51px] font-medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </p>
      </div>

      <div>
        <img className="" src={chart2} alt="" />
      </div>

      <div className='flex justify-center gap-x-10 mt-10'>
        <div className="grid grid-cols-1 justify-center">
          <div>
            <h1 className='text-center font-semibold mb-3'>Facebook Data</h1>
          </div>
          <CustomTable columns={orderTableColumns} data={fbData}></CustomTable>
        </div>
        <div className="grid grid-cols-1 justify-center">
          <div>
            <h1 className='text-center font-semibold mb-3'>Logoipsum Data</h1>
          </div>
          <CustomTable columns={orderTableColumns} data={lgData}></CustomTable>
        </div>
      </div>
    </section>
  );
}
