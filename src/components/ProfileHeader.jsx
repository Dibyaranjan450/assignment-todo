import React from "react";
import { brandLogo, menuHamburger, settingSvg, userAvatar } from "../assets";

const ProfileHeader = ({ profilePic }) => {
  return (
    <div className="flex justify-between items-center">
      <img src={menuHamburger} alt="menuHamburger" />
      <img src={brandLogo} alt="brandLogo" />

      <div className="relative">
        <img src={profilePic} alt="userAvatar" />
        <img
          src={settingSvg}
          alt="settingSvg"
          className="absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
