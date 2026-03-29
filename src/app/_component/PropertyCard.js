export default function PropertyCard({ image, price, name, beds, baths, area }) {
  return (
    <div className="w-[408px] rounded-[14px] border flex flex-col gap-6 bg-white p-px overflow-hidden">
      <div
        className="w-[406px] h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="flex flex-col gap-[11px] p-4">
        <p className="text-[#FF6900] font-normal text-[16px]">{price}</p>
        <p className="text-black font-normal text-[16px]">{name}</p>

        <div className="flex gap-1 w-[98.421875px] h-5">
          <img src="/img/ico/bed.svg" alt="BedIcon" />
          <p className="text-[#4A5565] font-normal text-[14px]">{beds} Beds</p>
        </div>

        <div className="flex w-[305px] h-4 gap-4">
          <div className="flex items-center gap-1 w-[98.421875px] h-5">
            <img src="/img/ico/bath.svg" alt="BathIcon" />
            <p className="text-[#4A5565] font-normal text-[14px]">{baths} Bathrooms</p>
          </div>
          <div className="flex items-center gap-1 w-[98.421875px] h-5">
            <img src="/img/ico/area.svg" alt="AreaIcon" />
            <p className="text-[#4A5565] font-normal text-[14px]">{area} sqft</p>
          </div>
        </div>
      </div>
    </div>
  );
}
