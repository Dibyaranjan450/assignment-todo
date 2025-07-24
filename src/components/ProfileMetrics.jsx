import React from "react";
import {
  indexInfoSvg,
  metricIndexArrow,
  scoringStar,
  timeIcon,
} from "../assets";

const ProfileMetrics = ({ metrics }) => {
  // const metricArr = [
  //   {
  //     header: "My current overall rating",
  //     img: scoringStar,
  //     content: "7.82",
  //   },
  //   {
  //     header: "My current overall rating",
  //     img: scoringStar,
  //     headerImg: "",
  //     content: "7.82",
  //   },
  //   {
  //     header: "My current overall rating",
  //     img: scoringStar,
  //     content: "7.82",
  //   },
  // ];
  console.log(metrics);

  return (
    <div className="grid gap-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-2.5">
          <img src={timeIcon} alt="timeIcon" />
          <span className="grid text-2xl font-bold">
            {metrics.totalGameTime}
            <p className="text-[14px] font-normal">My game-time</p>
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="rounded-lg bg-[#374151] p-2.5">
            <img
              src={metrics.currentTeam.teamProfilePic}
              alt=""
              className="w-7.5 h-7.5"
            />
          </div>

          <span className="grid text-2xl font-bold">
            {metrics.currentTeam.name}
            <p className="text-[14px] font-normal">My current team</p>
          </span>
        </div>
      </div>

      <div className="p-3 bg-[#1F2A37] rounded-[4.8px] flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-[14px] font-normal text-[#9CA3AF]">
            My current overall rating
          </p>

          <div className="flex items-center gap-1 rounded-md border border-[#FACA15] bg-[#633112] py-0.5 px-3">
            <img src={scoringStar} alt="scoringStar" />
            <p className="text-[12px] font-medium">
              {metrics.currentTeam.rating}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[14px] font-normal text-[#9CA3AF] flex items-center gap-2">
            My form index
            <img src={indexInfoSvg} alt="indexInfoSvg" />
          </span>

          <div className="flex items-center gap-1 rounded-md border border-[#84E1BC] bg-[#014737] py-0.5 px-3">
            <img src={metricIndexArrow} alt="metricIndexArrow" />
            <p className="text-[12px] font-medium">{metrics.formIndex.value}</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[14px] font-normal text-[#9CA3AF]">
            Upcoming match
          </p>

          <div className="rounded-md bg-[#4B5563] py-0.5 px-3">
            <p className="text-[12px] font-medium">
              {metrics.upcomingMatch.date}, vs{" "}
              {metrics.upcomingMatch.oponentTeam}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMetrics;
