export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="w-[410.67px] rounded-[14px] border border-[#0000001A] gap-9 p-[25px] flex flex-col justify-center items-center">
      <div className="bg-[#FFEDD4] w-12 h-12 rounded-full flex items-center justify-center">
        <img src={icon} alt={`${title} Icon`} />
      </div>
      <div className="text-[#0A0A0A] text-[16px] font-normal text-center">{title}</div>
      <h1 className="text-[#4A5565] text-center">{description}</h1>
    </div>
  );
}
