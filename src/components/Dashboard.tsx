import * as React from 'react';
import Image from "../images/chef1.png";

export interface IDashboardProps {
}

export function Dashboard (props: IDashboardProps) {
  return (
    <div className="wrapper">
      <div className="font-mono font-bold mt-[125px] lg:mt-[0px] text-[1.5rem]">Welcome!</div>
      <div className="lg:flex">
        <div className="flex-col mt-[10px] lg:mt-[0px] lg:text-[1.2rem] text-[1rem] font-mono">
          <div>
            Order your sumptuous meals, fruits, drinks and dessert at affordable
            prices,
          </div>
          <div>delivered to you in good time! You can't stop at one!</div>
        </div>
        <div className="lg:w-[10%] w-[17%] ml-[100px] lg:ml-[800px] -mt-[178px] absolute lg:-mt-[43px]">
          <img src={Image} alt="welcome" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
