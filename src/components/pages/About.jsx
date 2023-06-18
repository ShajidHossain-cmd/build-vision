const About = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-6 bg-[#e3ebd2]">
      <h1 className=" text-2xl font-bold">// ABOUT</h1>
      <div className="grid grid-cols-5 grid-rows-2">
        <div className="col-span-1">
          <p className="text-sm">
            Our houses are meticulously designed with a perfect blend of
            aesthetics and functionality. Each home is thoughtfully crafted to
            create a comfortable and stylish living space. With attention to
            detail and quality craftsmanship, we create houses that exceed
            expectations, providing a haven that reflects your unique style and
            enhances your daily life.
          </p>
          <button className=" text-sm  border-2 border-black py-2 px-2 rounded-full text-center uppercase ">
            Learn more
          </button>
        </div>
        <div className="col-span-1"></div>

        <div className="col-span-1 bg-[#262523] text-[#e3ebd2] w-[248px] h-[248px] flex flex-col items-center justify-center ">
          {/* // width max 248 */}
          <p className="text-2xl font-bold text-center mb-3">100+</p>
          <p className="">Completed projects</p>
        </div>

        <div className="col-span-1"></div>
        <div className="col-span-1  w-[248px] h-[248px] border-2 border-[#81817d] flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-center mb-3">23</p>
          <p>professionals </p>
        </div>
        <div className="col-span-3"></div>
        <div className="col-span-1 w-[248px] h-[248px] border-2 border-[#81817d] flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-center mb-3">15</p>
          <p>Years on the market</p>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};
export default About;
