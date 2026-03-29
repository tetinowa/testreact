import EmployeeCard from "./_component/employeeCard";
import FeatureCard from "./_component/FeatureCard";
import StepItem from "./_component/StepItem";
import PropertyCard from "./_component/PropertyCard";
import StatBlock from "./_component/StatBlock";

const employees = [
  { image: "/img/employees/michael.jpg", name: "Michael Chen", occup: "Senior Real Estate Agent", propertiesSold: "24" },
  { image: "/img/employees/david.jpg", name: "David Martinez", occup: "Property Specialist", propertiesSold: "18" },
  { image: "/img/employees/james.jpg", name: "James Wilson", occup: "Investment Advisor", propertiesSold: "32" },
  { image: "/img/employees/robert.jpg", name: "Robert Thompson", occup: "Luxury Home Expert", propertiesSold: "28" },
];

const features = [
  { icon: "/img/check.png", title: "Top-end Curation", description: "Carefully selected properties that meet our high standards of quality" },
  { icon: "/img/check.png", title: "Expert Agents", description: "Work with experienced professionals who know the market inside and out" },
  { icon: "/img/check.png", title: "Easy Process", description: "Our streamlined approach makes buying or selling simple and stress-free" },
];

const steps = [
  { number: 1, title: "Browse Curated Homes", description: "Explore our carefully selected collection of properties that match your lifestyle and budget. Every listing is verified and includes detailed information." },
  { number: 2, title: "Build a Tour", description: "Schedule viewings at your convenience and visit multiple properties in one trip. Our team coordinates everything to save you time." },
  { number: 3, title: "Get Expert Advice", description: "Connect with experienced agents who understand the market and can guide you through every step of your home-buying journey." },
  { number: 4, title: "Offer and Close", description: "Make confident offers with our support and navigate the closing process smoothly. We handle the paperwork so you can focus on moving in." },
];

const properties = [
  { image: "/img/house1.jpg", price: "$216,000", name: "Piney Hills", beds: 3, baths: 2, area: "2,150" },
  { image: "/img/house1.jpg", price: "$216,000", name: "Piney Hills", beds: 3, baths: 2, area: "2,150" },
  { image: "/img/house1.jpg", price: "$216,000", name: "Piney Hills", beds: 3, baths: 2, area: "2,150" },
  { image: "/img/house1.jpg", price: "$216,000", name: "Piney Hills", beds: 3, baths: 2, area: "2,150" },
  { image: "/img/house1.jpg", price: "$216,000", name: "Piney Hills", beds: 3, baths: 2, area: "2,150" },
  { image: "/img/house1.jpg", price: "$216,000", name: "Piney Hills", beds: 3, baths: 2, area: "2,150" },
];

const stats = [
  { icon: "/img/ico/house.svg", title: "Find your dream home for life", description: "Browse thousands of properties and find the perfect place" },
  { icon: "/img/ico/house.svg", title: "Find your dream home for life", description: "Browse thousands of properties and find the perfect place" },
  { icon: "/img/ico/house.svg", title: "Find your dream home for life", description: "Browse thousands of properties and find the perfect place" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-[107px] bg-white">
      <div className="flex items-center min-w-screen gap-10 flex-col bg-black font-sans dark:bg-white pt-16 pb-16 pl-4 pr-4">
        <div className="flex flex-col items-center w-7xlto gap-4">
          <div className="w-[1065px] h-[72px] flex flex-col justify-center items-center">
            <h1 className="text-[24px] text-black font-medium">Smart Tools</h1>
            <h1 className="text-[24px] text-black font-normal">Real Experts, Easy Moves</h1>
          </div>
          <h1 className="text-[#4A5565]">Your journey to finding the perfect home starts here</h1>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <button className="bg-[#FF6900] rounded-lg w-[140.3359375px] h-9">
          <p className="text-white font-medium text-[14px]">Get Started</p>
        </button>
      </div>

      <div className="w-full h-[474px] bg-[#F9FAFB] gap-2.5 flex flex-col items-center justify-center">
        <div className="pt-10 pb-10 flex flex-col gap-12">
          <div className="gap-4 flex flex-col items-center justify-center">
            <h1 className="text-[#0A0A0A] text-[20px] font-medium text-center">
              Buying Doesn't Have To<br />Be Overwhelming
            </h1>
            <h2 className="text-[#4A5565] text-[16px] font-normal text-center">
              Our streamlined process makes finding your dream home simple and stress-free
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {steps.map((step) => (
              <StepItem key={step.number} {...step} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-7xl flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-center text-[16px] font-normal text-[#0A0A0A]">Explore Properties</h1>
          <div className="h-9 flex gap-2">
            <div className="rounded-full pt-2 pb-2 pl-6 pr-6 bg-[#FF6900] flex justify-center items-center text-white text-[14px] font-medium">House</div>
            <div className="rounded-full pt-2 pb-2 pl-6 pr-6 flex justify-center items-center text-[14px] font-medium border border-[#0000001A] text-[#0A0A0A]">Villa</div>
            <div className="rounded-full pt-2 pb-2 pl-6 pr-6 flex justify-center items-center text-[14px] font-medium border border-[#0000001A] text-[#0A0A0A]">Apartment</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-7">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

        <button className="bg-[#FF6900] rounded-lg w-[140.3359375px] h-9">
          <p className="text-white font-medium text-[14px]">Load More Listings</p>
        </button>
      </div>

      <div className="w-full bg-[#F9FAFB] gap-10 flex flex-col items-center pt-10 pb-10">
        <div className="gap-4 flex flex-col items-center justify-center">
          <h1 className="text-[#0A0A0A] text-[20px] font-medium text-center">
            Meet the People <br /> Behind the Process
          </h1>
          <h2 className="text-[#4A5565] text-[16px] font-normal text-center">
            Our streamlined process makes finding your dream home simple and stress-free
          </h2>
        </div>

        <div className="grid grid-cols-4 justify-center items-center gap-6">
          {employees.map((employee, index) => (
            <EmployeeCard key={index} {...employee} />
          ))}
        </div>

        <button className="bg-[#FF6900] rounded-lg w-[140.3359375px] h-9">
          <p className="text-white font-medium text-[14px]">Meet the Team</p>
        </button>
      </div>

      <div className="flex justify-center items-center gap-8">
        {stats.map((stat, index) => (
          <StatBlock key={index} {...stat} />
        ))}
      </div>

      <div className="bg-[#101828] flex flex-col gap-6 pt-10 pb-10 w-full items-center justify-center">
        <h1 className="text-center text-[16px] font-normal text-white">
          The Only Market Update<br />You'll Actually Want to Read
        </h1>
        <p className="text-center text-[16px] font-normal text-[#99A1AF]">
          Get weekly insights on the real estate market, new listings, and expert tips delivered to your inbox
        </p>
        <div className="flex gap-3 w-md h-9s-center justify-center">
          <div className="h-9 bg-white rounded-lg border border-[#00000000] pt-px pb-px pl-4 pr-4">
            Enter your Email
          </div>
          <button className="bg-[#FF6900] rounded-lg w-[140.3359375px] h-9">
            <p className="text-white font-medium text-[14px]">Subscribe</p>
          </button>
        </div>
      </div>

      <div className="w-full bg-white pt-[49px] pl-4 pr-4 border flex justify-center items-center">
        <div className="flex flex-col gap-8 w-7xl">
          <div className="grid grid-cols-4 gap-8 w-7xl h-40">
            {[
              { heading: "NEED HELP", links: ["Facebook", "Twitter", "Instagram", "LinkedIn"] },
              { heading: "COMPANY", links: ["Facebook", "Twitter", "Instagram", "LinkedIn"] },
              { heading: "QUICK LINKS", links: ["Facebook", "Twitter", "Instagram", "LinkedIn"] },
              { heading: "FOLLOW", links: ["Facebook", "Twitter", "Instagram", "LinkedIn"] },
            ].map((col) => (
              <div key={col.heading} className="flex flex-col gap-4">
                <h1 className="text-black text-[16px]">{col.heading}</h1>
                {col.links.map((link) => (
                  <p key={link} className="text-[#4A5565] text-[16px]">{link}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center h-[53px] border-t">
            <h1 className="text-[14px] text-[#4A5565]">© 2024 Real Estate Co. All rights reserved.</h1>
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
