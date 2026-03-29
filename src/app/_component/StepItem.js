export default function StepItem({ number, title, description }) {
  return (
    <div className="flex gap-8 pl-5 pr-5">
      <div className="border-[#FF6900] border-2 rounded-full w-10 h-10 text-[#F69000] flex items-center justify-center font-normal flex-shrink-0">
        {number}
      </div>
      <div className="flex flex-col gap-2 w-lg h-[107px]">
        <h1 className="text-black text-[18px] font-medium">{title}</h1>
        <h2 className="text-[#4A5565] text-[16px] font-normal">{description}</h2>
      </div>
    </div>
  );
}
