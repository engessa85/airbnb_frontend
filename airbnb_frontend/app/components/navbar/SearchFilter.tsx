import React from "react";

function SearchFilter() {
  return (
    <div className=" w-[600px] items-center justify-between h-[48px] border border-gray-400 rounded-2xl px-4 hidden lg:flex">
      <div className="items-center justify-between w-[500px] flex ">
      <div className="cursor-pointer">
        <p className="text-sm">Where</p>
        <p className="text-xs">Wanted Location</p>
      </div>
      <div className="cursor-pointer">
        <p className="text-sm">check In</p>
        <p className="text-xs">Add Date</p>
      </div>
      <div className="cursor-pointer">
        <p className="text-sm">Check Out</p>
        <p className="text-xs">Add Date</p>
      </div>
      <div className="cursor-pointer">
        <p className="text-sm">Who</p>
        <p className="text-xs">Add Guests</p>
      </div>
      </div>
      <div className="rounded-full bg-airbnb text-white p-3 cursor-pointer">
        <svg
          viewBox="0 0 32 32"
          style={{
            display: "block",
            fill: "none",
            height: "16px",
            width: "16px",
            stroke: "currentColor",
            strokeWidth: 4,
            overflow: "visible",
          }}
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path
            fill="none"
            d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default SearchFilter;
