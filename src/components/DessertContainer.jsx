import React, { useEffect, useRef } from "react";
import Chocoval from "../images/i1.png";
import Val from "../images/i6.png";
import Strawb from "../images/i5.png";
import Chocolay from "../images/i2.png";
import Mixed from "../images/i4.png";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const DessertContainer = ({ flag, scrollValue }) => {
  const rowContainer = useRef();

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex gap-3 my-12 scroll-smooth ${
        flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden"
      }`}
    >
      <div className="w-300 md:w-340 md:min-w-[340px] h-auto min-w-[300px] bg-cardOverlay p-2 rounded-lg backdrop-blur-lg my-12 hover:drop-shadow-lg">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={Chocoval}
            alt="pineapple"
            className="w-40 -mt-8 drop-shadow-2xl"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white text-[1rem]" />
          </motion.div>
        </div>
        <div className="w-full flex flex-col gap-4 items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">
            Chocolate Vanilla Ice cream
          </p>
          {/* <p className="mt-1 text-sm text-gray-500">45 Calories</p> */}
          <div className="flex items-center gap-8">
            <p className="text-lg text-headingColor font-semibold">
              <span className="text-sm text-red-500">$</span> 5.25
            </p>
          </div>
        </div>
      </div>
      <div className="w-300 md:w-340 md:min-w-[340px] h-auto min-w-[300px] bg-cardOverlay p-2 rounded-lg backdrop-blur-lg my-12 hover:drop-shadow-lg">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={Val}
            alt="vanilla"
            className="w-40 -mt-4 drop-shadow-2xl"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white text-[1rem]" />
          </motion.div>
        </div>
        <div className="w-full flex flex-col gap-4 items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">
            Vanilla Ice cream
          </p>
          {/* <p className="mt-1 text-sm text-gray-500">45 Calories</p> */}
          <div className="flex items-center gap-8">
            <p className="text-lg text-headingColor font-semibold">
              <span className="text-sm text-red-500">$</span> 6.25
            </p>
          </div>
        </div>
      </div>
      <div className="w-300 md:w-340 md:min-w-[340px] h-auto min-w-[300px] bg-cardOverlay p-2 rounded-lg backdrop-blur-lg my-12 hover:drop-shadow-lg">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={Strawb}
            alt="strawberry"
            className="w-40 -mt-5 drop-shadow-2xl"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white text-[1rem]" />
          </motion.div>
        </div>
        <div className="w-full mt-[8px] flex flex-col gap-4 items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">
            Strawberry Ice cream
          </p>
          {/* <p className="mt-1 text-sm text-gray-500">45 Calories</p> */}
          <div className="flex items-center gap-8">
            <p className="text-lg text-headingColor font-semibold">
              <span className="text-sm text-red-500">$</span> 4.25
            </p>
          </div>
        </div>
      </div>
      <div className="w-300 md:w-340 md:min-w-[340px] h-auto min-w-[300px] bg-cardOverlay p-2 rounded-lg backdrop-blur-lg my-12 hover:drop-shadow-lg">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={Chocolay}
            alt="chocolate-layered"
            className="lg:w-[24%] w-[24%] -mt-4 drop-shadow-2xl"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white text-[1rem]" />
          </motion.div>
        </div>
        <div className="w-full lg:-mt-2 mt-3 flex flex-col gap-4 items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">
            Chocolate-layered Ice cream
          </p>
          {/* <p className="mt-1 text-sm text-gray-500">45 Calories</p> */}
          <div className="flex items-center gap-8">
            <p className="text-lg text-headingColor font-semibold">
              <span className="text-sm text-red-500">$</span> 7.25
            </p>
          </div>
        </div>
      </div>
      <div className="w-300 md:w-340 md:min-w-[340px] h-auto min-w-[300px] bg-cardOverlay p-2 rounded-lg backdrop-blur-lg my-12 hover:drop-shadow-lg">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={Mixed}
            alt="mixed-flavoured"
            className="w-[47%] -mt-7 drop-shadow-2xl"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white text-[1rem]" />
          </motion.div>
        </div>
        <div className="w-full lg:-mt-[2px] mt-[18px] flex flex-col gap-4 items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">
            Mixed Flavoured Ice cream
          </p>
          {/* <p className="mt-1 text-sm text-gray-500">45 Calories</p> */}
          <div className="flex items-center gap-8">
            <p className="text-lg text-headingColor font-semibold">
              <span className="text-sm text-red-500">$</span> 5.25
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DessertContainer;
