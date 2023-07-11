import CustomTable from "./CustomTable";

export default function NinethSection() {

   const tableData = [
     {
       Date: "06-17 - 06-23",
       Users: 1476,
       "Week 0": "$209",
       "Week 1": "$219",
       "Week 2": "$230",
       "Week 3": "$242",
       "Week 4": "$254",
       "Week 5": "$267",
       "Week 6": "$280",
       "Week 7": "$294",
       "Week 8": "$309",
     },
     {
       Date: "06-24 - 06-30",
       Users: 1678,
       "Week 0": "$212",
       "Week 1": "$223",
       "Week 2": "$234",
       "Week 3": "$245",
       "Week 4": "$258",
       "Week 5": "$271",
       "Week 6": "$284",
       "Week 7": "$298",
       "Week 8": null,
     },
     {
       Date: "06-31 - 07-06",
       Users: 1561,
       "Week 0": "$210",
       "Week 1": "$221",
       "Week 2": "$232",
       "Week 3": "$243",
       "Week 4": "$255",
       "Week 5": "$268",
       "Week 6": "$281",
       "Week 7": null,
       "Week 8": null,
     },
     {
       Date: "07-07 - 07-14",
       Users: 2678,
       "Week 0": "$205",
       "Week 1": "$215",
       "Week 2": "$226",
       "Week 3": "$237",
       "Week 4": "$249",
       "Week 5": "$262",
       "Week 6": null,
       "Week 7": null,
       "Week 8": null,
     },
     {
       Date: "07-15 - 07-21",
       Users: 1121,
       "Week 0": "$211",
       "Week 1": "$222",
       "Week 2": "$233",
       "Week 3": "$244",
       "Week 4": "$256",
       "Week 5": null,
       "Week 6": null,
       "Week 7": null,
       "Week 8": null,
     },
     {
       Date: "07-22 - 07-28",
       Users: 2210,
       "Week 0": "$220",
       "Week 1": "$231",
       "Week 2": "$243",
       "Week 3": "$255",
       "Week 4": null,
       "Week 5": null,
       "Week 6": null,
       "Week 7": null,
       "Week 8": null,
     },
     {
       Date: "07-29 - 08-04",
       Users: 1627,
       "Week 0": "$225",
       "Week 1": "$236",
       "Week 2": "$248",
       "Week 3": null,
       "Week 4": null,
       "Week 5": null,
       "Week 6": null,
       "Week 7": null,
       "Week 8": null,
     },
   ];


   const orderTableColumns = [
     { label: "Date", value: "Date" },
     { label: "Users", value: "Users" },
     { label: "Week 0", value: "Week 0" },
     { label: "Week 1", value: "Week 1" },
     { label: "Week 2", value: "Week 2" },
     { label: "Week 3", value: "Week 3" },
     { label: "Week 4", value: "Week 4" },
     { label: "Week 5", value: "Week 5" },
     { label: "Week 6", value: "Week 6" },
     { label: "Week 7", value: "Week 7" },
     { label: "Week 8", value: "Week 8" },
   ];
  return (
    <section className="container mx-auto mt-[80px]">
      <CustomTable columns={orderTableColumns} data={tableData}></CustomTable>
    </section>
  );
}
