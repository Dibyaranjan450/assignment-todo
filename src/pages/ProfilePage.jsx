import React from "react";
import {
  ProfileHeader,
  ProfileMetrics,
  ProfileUserContent,
} from "../components";
import { indexInfoSvg, userAvatar } from "../assets";

const ProfilePage = () => {
  const demoAPIResponce = {
    user: {
      name: "Jorge Pereyra Díaz",
      profilePic: userAvatar,
    },
    metrics: {
      totalGameTime: "671’",
      currentTeam: {
        name: "KSC",
        teamProfilePic:
          "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Calcutta_Football_League.svg/1200px-Calcutta_Football_League.svg.png",
        rating: "7.82",
      },
      formIndex: {
        status: "up",
        value: "+2.1%",
      },
      upcomingMatch: { oponentTeam: "CSK", date: "Jul 28" },
    },
  };

  const careerSummeryArr = [
    {
      title: "CDM",
      content: "Position",
    },
    {
      title: "1",
      content: "Goals Scored",
    },
    {
      title: "2",
      content: "Assists",
    },
    {
      title: "13",
      content: "Chances Created",
    },
  ];

  return (
    <>
      <div className="p-6 grid gap-6 bg-[#080809]">
        <ProfileHeader profilePic={demoAPIResponce?.user?.profilePic} />

        <ProfileUserContent
          userName={demoAPIResponce?.user?.name}
          tournamentList={[]}
        />

        <ProfileMetrics metrics={demoAPIResponce.metrics} />
      </div>

      <div className="p-6 grid gap-2">
        <div className="grid gap-4 px-4 py-6 bg-[#1F2A37] rounded-lg">
          <span className="flex items-center justify-center gap-1.5 text-[16px] font-bold">
            Career Summary <img src={indexInfoSvg} alt="indexInfoSvg" />
          </span>

          <div className="flex flex-wrap gap-2">
            {careerSummeryArr.map((data) => (
              <div className="w-[48%] py-3 grid gap-1 bg-[#374151] rounded-[8px]">
                <span className="grid gap-1 justify-items-center text-2xl font-normal">
                  {data.title}
                  <p className="px-2.5 py-0.5 bg-[#1F2A37] text-[12px] font-medium rounded-md text-[#9CA3AF]">
                    {data.content}
                  </p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
