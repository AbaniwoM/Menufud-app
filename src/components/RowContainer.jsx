import React, {useEffect, useRef} from 'react';
import Pine from "../images/f2.png";
import Straw from "../images/f1.png";
import Banna from "../images/f9.png";
import Melon from "../images/f10.png";
import Apple from "../images/f8.png";
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';

const RowContainer = ({flag, scrollValue}) => {
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
            src={Pine}
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
            Pineapples
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
            src={Straw}
            alt="strawberry"
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
            Strawberries
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
            src={Banna}
            alt="bananna"
            className="w-40 -mt-3 drop-shadow-2xl"
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
            Banannas
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
            src={Melon}
            alt="watermelon"
            className="w-40 -mt-4 drop-shadow-2xl"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white text-[1rem]" />
          </motion.div>
        </div>
        <div className="w-full -mt-2 flex flex-col gap-4 items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">
            Water Melon
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
            src={Apple}
            alt="apple"
            className="w-40 -mt-3 drop-shadow-2xl"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white text-[1rem]" />
          </motion.div>
        </div>
        <div className="w-full -mt-5 flex flex-col gap-4 items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">
            Apples
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
}

export default RowContainer