import React from "react";
import image from "../assets/Logo.svg";
import Button from "./Button";

function NavBar() {
  return (
    <div className="sm:max-w-screen-xl mx-auto py-6 bg-zinc-800 flex justify-between items-center">
      <div className="flex items-center">
        <img style={{ height: 35 }} src={image} alt="" />
      <div className="flex links gap-14 ml-25">
        {["Home", "Work", "Culture" ," ","News"].map((elem, index) => (
          <a className="text-lg flex  items-center gap-1">
            {index === 1 ? (
              <span
                style={{ boxShadow: "0 0 0.25 #00FF19" }}
                className="inline-block w-2 h-2 bg-amber-50 rounded-full "
              ></span>
            ) : index === 3 && ("|")}
            {elem}
          </a>
        ))}
      </div>
      </div>
      <div className="hidden sm:block">
        <Button />
      </div>
    </div>
  );
}

export default NavBar;
