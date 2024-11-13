import React from "react";
import Image from "next/image";

function PropirityItem() {
  return (
    <div className="cursor-pointer">
      <div className="aspect-square rounded-xl overflow-hidden relative">
        <Image src="/beach_1.jpg" alt="image" fill className="object-fill hover:scale-110 transition" />
      </div>
      <div className="mt-2">
        <p className="font-bold">properity name</p>
      </div>
      <div className="text-sm text-gray-700 mt-1">
        <strong>200$</strong> Price
      </div>
    </div>
  );
}

export default PropirityItem;
