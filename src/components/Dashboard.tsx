import * as React from 'react';
import Image from "../images/chef1.png";
import {motion} from "framer-motion";
import {MdChevronRight, MdChevronLeft} from "react-icons/md";
import RowContainer from './RowContainer';

export interface IDashboardProps {
}

export function Dashboard (props: IDashboardProps) {
  return (
    <div className="wrapper">
      <div className="font-mono font-bold mt-[125px] lg:mt-[0px] text-[1.5rem]">
        Welcome!
      </div>
      <div className="lg:flex">
        <div className="flex-col mt-[10px] lg:mt-[0px] lg:text-[1.2rem] text-[1rem] font-mono">
          <div>
            Order your sumptuous meals, fruits, drinks and dessert at affordable
            prices,
          </div>
          <div>delivered to you in good time! You can't stop at one!</div>
        </div>
        <div className="lg:w-[10%] w-[17%] ml-[110px] lg:ml-[800px] -mt-[178px] absolute lg:-mt-[43px]">
          <img src={Image} alt="welcome" />
        </div>
      </div>

      <section className="w-full my-6 mt-[35px]">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our fresh & healthy fruits
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center">
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center">
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer flag={true} />
      </section>
    </div>
  );
};

export default Dashboard;
