import React from 'react'
import image3 from "../assets/image11.jpg"

const Left8 = () => {
  return (
  <div className='flex flex-row justify-center items-end relative rounded-lg h-[700px]'
    style={{
      backgroundImage: `url(${image3})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "background-image 1s ease-in-out",
    }} 
    >
    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

    <div className="relative z-10 text-[25px] font-[900] text-[white] text-left p-[20px] flex flex-col gap-[10px]">
      Optimizing IT for Maximum Efficiency
      <p className="text-[15px] text-justify font-[500] text-[#dadada]">
        Streamlining processes with robust, automated IT solutions to boost productivity and reduce costs.
      </p>
    </div>


  </div>
  )
}

export default Left8