export default function StatBlock({ icon, title, description }) {
  return (
    <div className="w-[333.6640625px] h-[152px] flex gap-4 flex-col items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-[#101828] flex justify-center items-center">
        <img src={icon} alt={title} />
      </div>
      <h1 className="text-[16px] text-black font-normal text-center">{title}</h1>
      <h1 className="text-[16px] text-black font-normal text-center">{description}</h1>
    </div>
  );
}
