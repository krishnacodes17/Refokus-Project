import React from "react";

function Footer() {
  return (
    <div>
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
          <div className="base-1/2">
            <h1 className="text-[11rem] leading-none font-semibold tracking-tight">
              refokus.
            </h1>
          </div>
          <div className="base-1/2 flex gap-4">
            <div className=" basis-1/3">
              <h4 className="mb-10 text-zinc-500">social</h4>
              {["instagram", "twitte", "linkedin"].map((item, ind) => (
                <a className="text-zinc-500 block mt-2 capitalize " key={ind}>
                  {item}
                </a>
              ))}
            </div>
            <div className=" basis-1/3">
              <h4 className="mb-10 text-zinc-500">social</h4>
              {["instagram", "twitte", "linkedin"].map((item, ind) => (
                <a className="text-zinc-500 block mt-2 capitalize " key={ind}>
                  {item}
                </a>
              ))}
            </div>
            <div className="basis-1/2">
                <p className="text-right">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod magnam dignissimos eligendi, consequatur voluptatibus ut!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
