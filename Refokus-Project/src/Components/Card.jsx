import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-zinc-700 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between transition-colors duration-300`}
      style={{
        backgroundColor: isHovered && hover ? hover : '#3f3f46'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h3>one hading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-2xl font-medium mt-7">Whatever heading</h1>
      </div>
      <div className="down w-full ">
        {start === true ? (
          <>
            <h1 className="text-5xl font-semibold tracking-tight leading-none">
              start a program{" "}
            </h1>
            <button className="rounded-full mt-5 py-2 px-3 border-[1px] border-zinc-50">
              Contect us
            </button>
          </>
        ) : null}

        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
