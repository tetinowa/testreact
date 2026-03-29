import Image from "next/image";

export default function EmployeeCard({ image, name, occup, propertiesSold }) {
  return (
    <div className="w-[302px] relative h-[390px] rounded-[14px] border flex flex-col items-center justify-center gap-6 bg-white overflow-hidden">
      <div className="w-[300px] relative h-64">
        <Image
          src={image}
          sizes="w-[300px] h-64"
          alt={name || "Employee photo"}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="w-[246.26px] h-[108px] flex flex-col justify-center items-center gap-1 p-4">
        <p className="text-black font-normal text-[16px]">{name}</p>
        <p className="text-[#4A5565] font-normal text-[16px]">{occup}</p>
        <p className="text-[#FF6900] font-normal text-[16px] text-center">
          {propertiesSold} properties<br />sold
        </p>
      </div>
    </div>
  );
}
