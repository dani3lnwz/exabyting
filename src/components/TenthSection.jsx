import CustomButton from "./CustomButton";

export default function TenthSection() {
  return (
    <section className="container mx-auto mt-[130px] w-[90%]">
      <div className="flex justify-between items-center">
        <div className="w-[706px]">
          <h1 className="text-[51px]">
            Ullamcorper morbi tincidunt ornare massa eget
          </h1>
          <p className="text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore{" "}
          </p>
        </div>

        <div>
          <CustomButton
            color="primary"
            variant="filled"
            className="w-[220px] h-[75px] rounded-[10px] "
          >
            <h1 className="text-[30px] text-center mx-auto">Apply</h1>
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
