import React from "react";
import { alertBell, dropdownArrow } from "../assets";

const ProfileUserContent = ({ userName, tournamentList }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-[14px] font-normal">Welcome</p>
        <p className="text-[18px] font-semibold">Jorge Pereyra Díaz</p>

        <div className="flex gap-3">
          <p className="text-[14px] font-medium text-[#D1D5DB]">All Seasons</p>

          <span className="flex gap-2 text-[14px] font-normal">
            All Tournaments
            <img src={dropdownArrow} alt="dropdownArrow" />
          </span>
        </div>
      </div>

      <img src={alertBell} alt="alertBell" />
    </div>
  );
};

export default ProfileUserContent;
