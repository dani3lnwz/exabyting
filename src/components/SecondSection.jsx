import CustomTable from "./CustomTable";

export default function SecondSection() {
   const data = [
     {
       Source: "Youtube",
       Ad: "Male_18+_UGC_Video",
       Cost: "$2,567.00",
       Sales: 120,
       "First time customers": 90,
       Revenue: "$10,800.00",
       ROAS: 4.21,
       CAC: "$28.52",
       "F.T. ROAS": 3.16,
     },
     {
       Source: "Adwords",
       Ad: "US_Generic_Search",
       Cost: "$1,233.00",
       Sales: 98,
       "First time customers": 71,
       Revenue: "$5,880.00",
       ROAS: 4.77,
       CAC: "$17.48",
       "F.T. ROAS": 3.43,
     },
     {
       Source: "Adwords",
       Ad: "SKU2343_shoppong",
       Cost: "$3,120.00",
       Sales: 150,
       "First time customers": 127,
       Revenue: "$14,700.00",
       ROAS: 4.71,
       CAC: "$24.55",
       "F.T. ROAS": 3.99,
     },
     {
       Source: "Facebook",
       Ad: "All_25+_Static_split_screen",
       Cost: "$5,400.00",
       Sales: 145,
       "First time customers": 111,
       Revenue: "$11,600.00",
       ROAS: 2.15,
       CAC: "$48.54",
       "F.T. ROAS": 1.65,
     },
     {
       Source: "Instagram",
       Ad: "W_25+_Static_split_screen",
       Cost: "$3,210.00",
       Sales: 280,
       "First time customers": 177,
       Revenue: "$23,800.00",
       ROAS: 7.41,
       CAC: "$18.17",
       "F.T. ROAS": 4.68,
     },
     {
       Source: "TikTok",
       Ad: "UGS_video_2",
       Cost: "$3,100.00",
       Sales: 120,
       "First time customers": 110,
       Revenue: "$7,080.00",
       ROAS: 2.28,
       CAC: "$28.14",
       "F.T. ROAS": 2.1,
     },
   ];


   const orderTableColumns = [
     { label: "Source", value: "Source" },
     { label: "Ad", value: "Ad" },
     { label: "Cost", value: "Cost" },
     { label: "Sales", value: "Sales" },
     { label: "First time customers", value: "First time customers" },
     { label: "Revenue", value: "Revenue" },
     { label: "ROAS", value: "ROAS" },
     { label: "CAC", value: "CAC" },
     { label: "F.T. ROAS", value: "F.T. ROAS" },
   ];

  return (
    <section className="pt-[50px]">
      <div className="max-w-6xl justify-center mx-auto mt-[100px">
        <h1 className="text-[50px] text-center pb-[48px]">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit
        </h1>
      </div>
      <CustomTable columns={orderTableColumns} data={data} />
    </section>
  );
}
