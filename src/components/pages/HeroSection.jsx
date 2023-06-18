import heroPic from "../../assets/wooden-frame-construction-252178_1920.jpg";
const HeroSection = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-6 bg-[#e3ebd2]">
      <div className="grid grid-rows-2 grid-cols-4 gap-10">
        <h2 className="col-span-3  text-6xl uppercase">Build Vision</h2>
        <div className="flex justify-between items-center">
          <button className="text-xl border-2 border-black py-2 px-4 rounded-full text-center uppercase">
            Discuss the project
          </button>
        </div>

        <p className=" text-sm">
          We specialize in designing and constructing modern houses quickly and
          affordably, without compromising on quality.
        </p>
        <h1 className="col-span-3 font-bold text-7xl text-right uppercase ">
          We Build Your Vision
        </h1>
      </div>
      <div
        className="relative py-3
        mt-6"
      >
        <img className="w-full object-cover h-[600px]  " src={heroPic} alt="" />
        <div
          class="w-0 h-0 
  border-l-[95px] border-l-transparent
  border-t-[80px] border-t-[#e3ebd2]
  border-r-[95px] border-r-transparent absolute top-0 right-56"
        ></div>
        <div
          class="w-0 h-0 
  border-l-[100px] border-l-transparent
  border-b-[200px] border-b-[#e3ebd2]
  border-r-[400px] border-r-transparent absolute bottom-0 -left-28   "
        ></div>
      </div>
    </div>
  );
};
export default HeroSection;
