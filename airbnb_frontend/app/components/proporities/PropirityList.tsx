import React from "react";
import PropirityItem from "./PropirityItem";

function PropirityList() {
  return (
    <div className="max-width-[1500px] p-4 mt-3">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <PropirityItem />
        <PropirityItem />
        <PropirityItem />
        <PropirityItem />
        <PropirityItem />
      </div>
    </div>
  );
}

export default PropirityList;
