import React from "react";
import Image from "next/image";
import SearchFilter from "./SearchFilter";
import UserStatus from "./UserStatus";

function NavBar() {
  return (
    <div className="w-full fixed top-0 left-0 z-10">
      <div className="p-4 border-b border-gray-50 flex flex-row items-center justify-between">
        <div>
          <Image src="/logo.png" alt="logo" width={100} height={38} />
        </div>

        <SearchFilter />
        <UserStatus />
      </div>
    </div>
  );
}

export default NavBar;
