/* eslint-disable react/prop-types */

export default function Card({icon, title, text}) {
  return (
    <div className="bg-white rounded-[20px] shadow-lg w-[428px] h-[400px] border ">
      <div className="grid grid-cols-1 items-center pl-[60px]">
        <div className="mr-4 mb-[85px] mt-[45px]">{icon}</div>
        <div className="pr-[45px]">
          <h1 className="text-xl font-bold">{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
