import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[3830px] flex flex-col gap-[107px] bg-white">
      <div className="flex items-center min-w-screen gap-10 flex-col bg-black font-sans dark:bg-white pt-16 pb-16 pl-4 pr-4 ">
        <div className="flex flex-col items-center w-[1280px] h-auto gap-4">
          <div className="w-[1065px] h-[72px] flex flex-col justify-center items-center">
            <h1 className="text-24 text-black font-medium">Smart Tools</h1>
            <h1 className="text-24 text-black font-normal">
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

      <div className="h-[474px] bg-[#F9FAFB] gap-2.5 flex   flex-col items-center justify-center">
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

          <div className="h-[92px]"></div>
        </div>
      </div>
    </div>
  );
}
