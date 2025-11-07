import Image from "next/image";

import employeeCard from "./_component/employeeCard";

const Data = [
  {
    image: "/img/employees/michael.jpg",
    name: "Michael Chen",
    occup: "Senior Real Estate Agent",
    propertiesSold: "24",
  },
  {
    image: "/img/employees/david.jpg",
    name: "David Martinez",
    occup: "Property Specialist",
    propertiesSold: "18",
  },
  {
    image: "/img/employees/james.jpg",
    name: "James Wilson",
    occup: "Investment Advisor",
    propertiesSold: "32",
  },
  {
    image: "/img/employees/robert.jpg",
    name: "Robert Thompson",
    occup: "Luxury Home Expert",
    propertiesSold: "28",
  },
];

export default function Home() {
  return (
    <div className=" flex flex-col items-center gap-[107px] bg-white">
      <div className="flex items-center min-w-screen gap-10 flex-col bg-black font-sans dark:bg-white pt-16 pb-16 pl-4 pr-4 ">
        <div className="flex flex-col items-center w-7xlto gap-4">
          <div className="w-[1065px] h-[72px] flex flex-col justify-center items-center">
            <h1 className="text-[24px] text-black font-medium">Smart Tools</h1>
            <h1 className="text-[24px] text-black font-normal">
              Real Experts, Easy Moves
            </h1>
          </div>
          <h1 className="text-[#4A5565]">
            Your journey to finding the perfect home starts here
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="w-[410.67px] rounded-[14px] border border-[#0000001A] gap-9 p-[25px] flex flex-col justify-center items-center">
            <div className="bg-[#FFEDD4] w-12 h-12 rounded-full flex items-center justify-center">
              <img className="" src="/img/check.png" alt="Curation Icon" />
            </div>
            <div className="text-[#0A0A0A] text-[16px] font-normal text-center">
              Top-end Curation
            </div>
            <h1 className="text-[#4A5565] text-center">
              Carefully selected properties that meet our high standards of
              quality
            </h1>
          </div>
          <div className="w-[410.67px] rounded-[14px] border border-[#0000001A] gap-9 p-[25px] flex flex-col justify-center items-center">
            <div className="bg-[#FFEDD4] w-12 h-12 rounded-full flex items-center justify-center">
              <img className="" src="/img/check.png" alt="Curation Icon" />
            </div>
            <div className="text-[#0A0A0A] text-[16px] font-normal text-center">
              Top-end Curation
            </div>
            <h1 className="text-[#4A5565] text-center">
              Carefully selected properties that meet our high standards of
              quality
            </h1>
          </div>{" "}
          <div className="w-[410.67px] rounded-[14px] border border-[#0000001A] gap-9 p-[25px] flex flex-col justify-center items-center">
            <div className="bg-[#FFEDD4] w-12 h-12 rounded-full flex items-center justify-center">
              <img className="" src="/img/check.png" alt="Curation Icon" />
            </div>
            <div className="text-[#0A0A0A] text-[16px] font-normal text-center">
              Top-end Curation
            </div>
            <h1 className="text-[#4A5565] text-center">
              Carefully selected properties that meet our high standards of
              quality
            </h1>
          </div>
        </div>

        <button className="bg-[#FF6900] rounded-lg w-[140.3359375px] h-9 ">
          <p className="text-white font-medium text-[14px]">Get Started</p>
        </button>
      </div>

      <div className="w-full h-[474px] bg-[#F9FAFB] gap-2.5 flex   flex-col items-center justify-center">
        <div className="pt-10 pb-10 flex flex-col gap-12">
          <div className="gap-4 flex flex-col items-center justify-center">
            <h1 className="text-[#0A0A0A] text-[20px] font-medium text-center">
              Buying Doesn't Have To<br></br>Be Overwhelming
            </h1>
            <h2 className="text-[#4A5565] text-[16px] font-normal text-center">
              Our streamlined process makes finding your dream home simple and
              stress-free
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex gap-8 pl-5 pr-5">
              <div className="border-[#FF6900] border-2 rounded-full w-10 h-10 text-[#F69000] flex items-center justify-center font-normal">
                1
              </div>
              <div className="flex flex-col gap-2 w-lg h-[107px]">
                <h1 className="text-black text-[18px] font-medium">
                  Browse Curated Homes
                </h1>
                <h2 className="text-[#4A5565] text-[16px] font-normal ">
                  Explore our carefully selected collection of properties that
                  match your lifestyle and budget. Every listing is verified and
                  includes detailed information.
                </h2>
              </div>
            </div>

            <div className="flex gap-8 pl-5 pr-5">
              <div className="border-[#FF6900] border-2 rounded-full w-10 h-10 text-[#F69000] flex items-center justify-center font-normal">
                3
              </div>
              <div className="flex flex-col gap-2 w-lg h-[107px]">
                <h1 className="text-black text-[18px] font-medium">
                  Get Expert Advice
                </h1>
                <h2 className="text-[#4A5565] text-[16px] font-normal ">
                  Connect with experienced agents who understand the market and
                  can guide you through every step of your home-buying journey.
                </h2>
              </div>
            </div>

            <div className="flex gap-8 pl-5 pr-5">
              <div className="border-[#FF6900] border-2 rounded-full w-10 h-10 text-[#F69000] flex items-center justify-center font-normal">
                2
              </div>
              <div className="flex flex-col gap-2 w-lg h-[107px]">
                <h1 className="text-black text-[18px] font-medium">
                  Build a Tour
                </h1>
                <h2 className="text-[#4A5565] text-[16px] font-normal ">
                  Schedule viewings at your convenience and visit multiple
                  properties in one trip. Our team coordinates everything to
                  save you time.
                </h2>
              </div>
            </div>

            <div className="flex gap-8 pl-5 pr-5">
              <div className="border-[#FF6900] border-2 rounded-full w-10 h-10 text-[#F69000] flex items-center justify-center font-normal">
                4
              </div>
              <div className="flex flex-col gap-2 w-lg h-[107px]">
                <h1 className="text-black text-[18px] font-medium">
                  Offer and Close
                </h1>
                <h2 className="text-[#4A5565] text-[16px] font-normal ">
                  Make confident offers with our support and navigate the
                  closing process smoothly. We handle the paperwork so you can
                  focus on moving in.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-7xl flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-center text-[16px] font-normal text-[#0A0A0A]">
            Explore Properties
          </h1>

          <div className="h-9 flex gap-2">
            <div className="rounded-full pt-2 pb-2 pl-6 pr-6 bg-[#FF6900] flex justify-center items-center text-white text-[14px] font-medium">
              House
            </div>
            <div className="rounded-full pt-2 pb-2 pl-6 pr-6 flex justify-center items-center text-[14px] font-medium border border-[#0000001A] text-[#0A0A0A]">
              Villa
            </div>
            <div className="rounded-full pt-2 pb-2 pl-6 pr-6 flex justify-center items-center text-[14px] font-medium border border-[#0000001A] text-[#0A0A0A]">
              Apartment
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-7">
          <div className="w-[408px] rounded-[14px] border flex flex-col gap-6 bg-white p-px overflow-hidden">
            <div className="w-[406px] h-48 bg-[url(/img/house1.jpg)] bg-cover bg-center"></div>
            <div className="flex flex-col gap-[11px] p-4">
              <p className="text-[#FF6900] font-normal text-[16px]">$216,000</p>
              <p className="text-black font-normal text-[16px]">Piney Hills</p>

              <div className="flex gap-1 w-[98.421875px] h-5">
                <img src="/img/ico/bed.svg" alt="BedIcon" />
                <p className="text-[#4A5565] font-normal text-[14px]">3 Beds</p>
              </div>

              <div className="flex w-[305px] h-4 gap-4">
                <div className="flex items-center gap-1 w-[98.421875px] h-5">
                  <img src="/img/ico/bath.svg" alt="BathIcon" />
                  <p className="text-[#4A5565] font-normal text-[14px]">
                    2 Bathroms
                  </p>
                </div>

                <div className="flex items-center gap-1 w-[98.421875px] h-5">
                  <img src="/img/ico/area.svg" alt="AreaIcon" />
                  <p className="text-[#4A5565] font-normal text-[14px]">
                    2,150 sqft
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[408px] rounded-[14px] border flex flex-col gap-6 bg-white p-px overflow-hidden">
            <div className="w-[406px] h-48 bg-[url(/img/house1.jpg)] bg-cover bg-center"></div>
            <div className="flex flex-col gap-[11px] p-4">
              <p className="text-[#FF6900] font-normal text-[16px]">$216,000</p>
              <p className="text-black font-normal text-[16px]">Piney Hills</p>

              <div className="flex gap-1 w-[98.421875px] h-5">
                <img src="/img/ico/bed.svg" alt="BedIcon" />
                <p className="text-[#4A5565] font-normal text-[14px]">3 Beds</p>
              </div>

              <div className="flex w-[305px] h-4 gap-4">
                <div className="flex items-center gap-1 w-[98.421875px] h-5">
                  <img src="/img/ico/bath.svg" alt="BathIcon" />
                  <p className="text-[#4A5565] font-normal text-[14px]">
                    2 Bathroms
                  </p>
                </div>

                <div className="flex items-center gap-1 w-[98.421875px] h-5">
                  <img src="/img/ico/area.svg" alt="AreaIcon" />
                  <p className="text-[#4A5565] font-normal text-[14px]">
                    2,150 sqft
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[408px] rounded-[14px] border flex flex-col gap-6 bg-white p-pxerflow-hidden">
            <div className="w-[406px] h-48 bg-[url(/img/house1.jpg)] bg-cover bg-center"></div>
            <div className="flex flex-col gap-[11px] p-4">
              <p className="text-[#FF6900] font-normal text-[16px]">$216,000</p>
              <p className="text-black font-normal text-[16px]">Piney Hills</p>

              <div className="flex gap-1 w-[98.421875px] h-5">
                <img src="/img/ico/bed.svg" alt="BedIcon" />
                <p className="text-[#4A5565] font-normal text-[14px]">3 Beds</p>
              </div>

              <div className="flex w-[305px] h-4 gap-4">
                <div className="flex items-center gap-1 w-[98.421875px] h-5">
                  <img src="/img/ico/bath.svg" alt="BathIcon" />
                  <p className="text-[#4A5565] font-normal text-[14px]">
                    2 Bathroms
                  </p>
                </div>

                <div className="flex items-center gap-1 w-[98.421875px] h-5">
                  <img src="/img/ico/area.svg" alt="AreaIcon" />
                  <p className="text-[#4A5565] font-normal text-[14px]">
                    2,150 sqft
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[408px] rounded-[14px] border flex flex-col gap-6 bg-white p-px overflow-hidden">
            <div className="w-[406px] h-48 bg-[url(/img/house1.jpg)] bg-cover bg-center"></div>
            <div className="flex flex-col gap-[11px] p-4">
              <p className="text-[#FF6900] font-normal text-[16px]">$216,000</p>
              <p className="text-black font-normal text-[16px]">Piney Hills</p>

              <div className="flex gap-1 w-[98.421875px] h-5">
                <img src="/img/ico/bed.svg" alt="BedIcon" />
                <p className="text-[#4A5565] font-normal text-[14px]">3 Beds</p>
              </div>

              <div className="flex w-[305px] h-4 gap-4">
                <div className="flex items-center gap-1 w-[98.421875px] h-5">
                  <img src="/img/ico/bath.svg" alt="BathIcon" />
                  <p className="text-[#4A5565] font-normal text-[14px]">
                    2 Bathroms
                  </p>
                </div>

                <div className="flex items-center gap-1 w-[98.421875px] h-5">
                  <img src="/img/ico/area.svg" alt="AreaIcon" />
                  <p className="text-[#4A5565] font-normal text-[14px]">
                    2,150 sqft
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[408px] rounded-[14px] border flex flex-col gap-6 bg-white p-px overflow-hidden">
            <div className="w-[406px] h-48 bg-[url(/img/house1.jpg)] bg-cover bg-center"></div>
            <div className="flex flex-col gap-[11px] p-4">
              <p className="text-[#FF6900] font-normal text-[16px]">$216,000</p>
              <p className="text-black font-normal text-[16px]">Piney Hills</p>

              <div className="flex gap-1 w-[98.421875px] h-5">
                <img src="/img/ico/bed.svg" alt="BedIcon" />
                <p className="text-[#4A5565] font-normal text-[14px]">3 Beds</p>
              </div>

              <div className="flex w-[305px] h-4 gap-4">
                <div className="flex items-center gap-1 w-[98.421875px] h-5">
                  <img src="/img/ico/bath.svg" alt="BathIcon" />
                  <p className="text-[#4A5565] font-normal text-[14px]">
                    2 Bathroms
                  </p>
                </div>

                <div className="flex items-center gap-1 w-[98.421875px] h-5">
                  <img src="/img/ico/area.svg" alt="AreaIcon" />
                  <p className="text-[#4A5565] font-normal text-[14px]">
                    2,150 sqft
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[408px] rounded-[14px] border flex flex-col gap-6 bg-white p-px overflow-hidden">
            <div className="w-[406px] h-48 bg-[url(/img/house1.jpg)] bg-cover bg-center"></div>
            <div className="flex flex-col gap-[11px] p-4">
              <p className="text-[#FF6900] font-normal text-[16px]">$216,000</p>
              <p className="text-black font-normal text-[16px]">Piney Hills</p>

              <div className="flex gap-1 w-[98.421875px] h-5">
                <img src="/img/ico/bed.svg" alt="BedIcon" />
                <p className="text-[#4A5565] font-normal text-[14px]">3 Beds</p>
              </div>

              <div className="flex w-[305px] h-4 gap-4">
                <div className="flex items-center gap-1 w-[98.421875px] h-5">
                  <img src="/img/ico/bath.svg" alt="BathIcon" />
                  <p className="text-[#4A5565] font-normal text-[14px]">
                    2 Bathroms
                  </p>
                </div>

                <div className="flex items-center gap-1 w-[98.421875px] h-5">
                  <img src="/img/ico/area.svg" alt="AreaIcon" />
                  <p className="text-[#4A5565] font-normal text-[14px]">
                    2,150 sqft
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="bg-[#FF6900] rounded-lg w-[140.3359375px] h-9 ">
          <p className="text-white font-medium text-[14px]">
            Load More Listings
          </p>
        </button>
      </div>

      <div className="w-full bg-[#F9FAFB] gap-10 flex flex-col items-center pt-10 pb-10">
        <div className="gap-4 flex flex-col items-center justify-center">
          <h1 className="text-[#0A0A0A] text-[20px] font-medium text-center">
            Meet the People <br></br> Behind the Process
          </h1>
          <h2 className="text-[#4A5565] text-[16px] font-normal text-center">
            Our streamlined process makes finding your dream home simple and
            stress-free
          </h2>
        </div>

        <div className="grid grid-cols-4 justify-center items-center gap-6">
          {Data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[302px]  relative h-[390px] rounded-[14px] border flex flex-col items-center justify-center gap-6 bg-white overflow-hidden"
              >
                <div className="w-[300px] relative h-64">
                  <Image
                    src={item.image}
                    sizes="w-[300px] h-64"
                    alt={item.name || "Employee photo"}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="w-[246.26px] h-[108px] flex flex-col justify-center items-center gap-1 p-4">
                  <p className="text-black font-normal text-[16px]">
                    {item.name}
                  </p>
                  <p className="text-[#4A5565] font-normal text-[16px]">
                    {item.occup}
                  </p>
                  <p className="text-[#FF6900] font-normal text-[16px] text-center">
                    {item.propertiesSold} properties<br></br>sold
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <button className="bg-[#FF6900] rounded-lg w-[140.3359375px] h-9 ">
          <p className="text-white font-medium text-[14px]">Meet the Team</p>
        </button>
      </div>

      <div className="flex justify-center items-center gap-8">
        <div className="w-[333.6640625px] h-[152px] flex gap-4 flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#101828] flex justify-center items-center">
            <img src="/img/ico/house.svg"></img>
          </div>
          <h1 className="text-[16px] text-black font-normal text-center">
            Find your dream home for life
          </h1>
          <h1 className="text-[16px] text-black font-normal text-center">
            Browse thousands of properties and find the perfect place
          </h1>
        </div>

        <div className="w-[333.6640625px] h-[152px] flex gap-4 flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#101828] flex justify-center items-center">
            <img src="/img/ico/house.svg"></img>
          </div>
          <h1 className="text-[16px] text-black font-normal text-center">
            Find your dream home for life
          </h1>
          <h1 className="text-[16px] text-black font-normal text-center">
            Browse thousands of properties and find the perfect place
          </h1>
        </div>

        <div className="w-[333.6640625px] h-[152px] flex gap-4 flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#101828] flex justify-center items-center">
            <img src="/img/ico/house.svg"></img>
          </div>
          <h1 className="text-[16px] text-black font-normal text-center">
            Find your dream home for life
          </h1>
          <h1 className="text-[16px] text-black font-normal text-center">
            Browse thousands of properties and find the perfect place
          </h1>
        </div>
      </div>

      <div className="bg-[#101828] flex flex-col gap-6 pt-10 pb-10 w-full items-center justify-center">
        <h1 className="text-center text-[16px] font-normal text-white">
          The Only Market Update<br></br>You'll Actually Want to Read
        </h1>

        <p className="text-center text-[16px] font-normal text-[#99A1AF]">
          Get weekly insights on the real estate market, new listings, and
          expert tips delivered to your inbox
        </p>

        <div className="flex gap-3 w-md h-9s-center justify-center">
          <div className="h-9 bg-white rounded-lg border border-[#00000000] pt-px pb-px pl-4 pr-4">
            Enter your Email
          </div>
          <button className="bg-[#FF6900] rounded-lg w-[140.3359375px] h-9 ">
            <p className="text-white font-medium text-[14px]">Meet the Team</p>
          </button>
        </div>
      </div>

      <div className="w-full bg-white pt-[49px] pl-4 pr-4 border flex justify-center items-center">
        <div className="flex flex-col gap-8 w-7xl">
          <div className="grid grid-cols-4 gap-8 w-7xl h-40">
            <div className="flex flex-col gap-4">
              <h1 className="text-black text-[16px]">NEED HELP</h1>
              <p className="text-[#4A5565] text-[16px]">Facebook</p>
              <p className="text-[#4A5565] text-[16px]">Twitter</p>
              <p className="text-[#4A5565] text-[16px]">Instagram</p>
              <p className="text-[#4A5565] text-[16px]">LinkedIn</p>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-black text-[16px]">COMPANY</h1>
              <p className="text-[#4A5565] text-[16px]">Facebook</p>
              <p className="text-[#4A5565] text-[16px]">Twitter</p>
              <p className="text-[#4A5565] text-[16px]">Instagram</p>
              <p className="text-[#4A5565] text-[16px]">LinkedIn</p>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-black text-[16px]">QUICK LINKS</h1>
              <p className="text-[#4A5565] text-[16px]">Facebook</p>
              <p className="text-[#4A5565] text-[16px]">Twitter</p>
              <p className="text-[#4A5565] text-[16px]">Instagram</p>
              <p className="text-[#4A5565] text-[16px]">LinkedIn</p>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-black text-[16px]">FOLLOW</h1>
              <p className="text-[#4A5565] text-[16px]">Facebook</p>
              <p className="text-[#4A5565] text-[16px]">Twitter</p>
              <p className="text-[#4A5565] text-[16px]">Instagram</p>
              <p className="text-[#4A5565] text-[16px]">LinkedIn</p>
            </div>
          </div>

          <div className="flex justify-between items-center h-[53px] border-t">
            <h1 className="text-[14px] text-[#4A5565]">
              © 2024 Real Estate Co. All rights reserved.
            </h1>
            <div className="flex gap-4 h-5">
              <p className="text-[14px] text-[#4A5565]">Privacy Policy</p>
              <p className="text-[14px] text-[#4A5565]">Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
