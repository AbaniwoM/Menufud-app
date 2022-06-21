import React from "react";
import { motion } from "framer-motion";
import { IoFastFood } from "react-icons/io5";
import ChickenContainer from "./ChickenContainer";
import CurryContainer from "./CurryContainer";

const MenusContainer = () => {

  return (
    <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
      <ChickenContainer />
      <CurryContainer />
      <motion.div
        whileTap={{ scale: 0.75 }}
        className="w-24 bg-card min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg duration-150 transition-all ease-in-out"
      >
        <div className="w-10 h-10 rounded-full shadow-lg bg-cartNumBg group-hover:bg-white flex items-center justify-center">
          <IoFastFood className="text-card group-hover:text-textColor text-lg" />
        </div>
        <p className="text-sm text-textColor group-hover:text-white">Rice</p>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.75 }}
        className="w-24 bg-card min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg duration-150 transition-all ease-in-out"
      >
        <div className="w-10 h-10 rounded-full shadow-lg bg-cartNumBg group-hover:bg-white flex items-center justify-center">
          <IoFastFood className="text-card group-hover:text-textColor text-lg" />
        </div>
        <p className="text-sm text-textColor group-hover:text-white">Fish</p>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.75 }}
        className="w-24 bg-card min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg duration-150 transition-all ease-in-out"
      >
        <div className="w-10 h-10 rounded-full shadow-lg bg-cartNumBg group-hover:bg-white flex items-center justify-center">
          <IoFastFood className="text-card group-hover:text-textColor text-lg" />
        </div>
        <p className="text-sm text-textColor group-hover:text-white">
          Soft Drinks
        </p>
      </motion.div>
    </div>
  );
};

export default MenusContainer;
