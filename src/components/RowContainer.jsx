import React from 'react';
import Pine from "../images/f2.png";
import Straw from "../images/f1.png";
import Banna from "../images/f9.png";
import Melon from "../images/f10.png";
import Apple from "../images/f8.png";
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';

const RowContainer = ({flag}) => {
  return (
    <div
      className={`w-full flex my-12 ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      }`}
    >
      <div className="w-300 md:w-225 h-auto backdrop-blur-lg my-12">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={Pine}
            alt="pineapple"
            className="w-40 -mt-8"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="lg:w-8 w-[70%] h-5 lg:h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white text-[1rem]" />
          </motion.div>
        </div>
        <div className="w-full flex flex-col gap-4 items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">
            Pineapples
          </p>
        </div>
      </div>
      <div className="w-300 ml-12 lg:ml-[62px] md:w-225 h-auto backdrop-blur-lg my-12">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={Straw}
            alt="pineapple"
            className="w-40 -mt-8"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="lg:w-8 w-[70%] h-5 lg:h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>
        <div className="w-full flex flex-col gap-4 items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">
            Strawberries
          </p>
        </div>
      </div>
      <div className="w-300 ml-12 lg:ml-[62px] md:w-225 h-auto backdrop-blur-lg my-12">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={Banna}
            alt="pineapple"
            className="w-40 -mt-8"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="lg:w-8 w-[70%] h-5 lg:h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>
        <div className="w-full flex flex-col gap-4 items-end justify-end">
          <p className="text-textColor lg:mt-6 font-semibold text-base md:text-lg">
            Banannas
          </p>
        </div>
      </div>
      <div className="w-300 ml-12 lg:ml-[62px] md:w-225 h-auto backdrop-blur-lg my-12">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={Melon}
            alt="water-melon"
            className="w-40 -mt-8"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="lg:w-8 w-[70%] h-5 lg:h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>
        <div className="w-full flex flex-col gap-4 items-end justify-end">
          <p className="text-textColor lg:mt-1 font-semibold text-base md:text-lg">
              Water Melon
          </p>
        </div>
      </div>
      <div className="w-300 ml-12 lg:ml-[62px] md:w-225 h-auto backdrop-blur-lg my-12">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={Apple}
            alt="apple"
            className="w-40 -mt-8"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="lg:w-8 w-[70%] h-5 lg:h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>
        <div className="w-full flex flex-col gap-4 items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">
            Apples
          </p>
        </div>
      </div>
    </div>
  );
}

export default RowContainer