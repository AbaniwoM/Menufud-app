import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoFastFood }  from "react-icons/io5";
import {
  makeStyles,
  Modal,
} from "@material-ui/core";
import { MdShoppingBasket } from "react-icons/md";
import Chi from "../images/r2.png";
import PotaChi from "../images/r1.png";
import RoastChi from "../images/r4.png";
import RedChi from "../images/r3.png";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 899,
    overflow: "hidden",
    height: 520,
    background: "rgba(255, 255, 255, 0.88)",
    boxShadow: "-4px 4px 4px rgba(0, 0, 0, 0.25)",
    // borderTop: "1px solid #000000",
    border: 0,
    position: "absolute",
    top: -20,
    bottom: 0,
    right: 0,
    left: 20,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "85vw",
      marginTop: "40px",
      marginRight: 23,
      overflowY: "scroll",
      height: "100vh",
    },
  },
  button: {
    fontSize: "1rem",
    display: "flex",
    justifyContent: "flex-end",
    left: "-40px",
    marginTop: 8,
    marginRight: "20px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      zIndex: 20,
      marginLeft: "10px",
      marginTop: "12px",
    },
  },
  chicken: {
    marginLeft: 30,
  },
}));

const CurryContainer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div
        whileTap={{ scale: 0.75 }}
        className="w-24 bg-card min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg duration-150 transition-all ease-in-out"
        onClick={() => setOpen(true)}
      >
        <div className="w-10 h-10 rounded-full shadow-lg bg-cartNumBg group-hover:bg-white flex items-center justify-center">
          <IoFastFood className="text-card group-hover:text-textColor text-lg" />
        </div>
        <p className="text-sm text-textColor group-hover:text-white">Curry</p>
      </motion.div>
      <Modal open={open}>
        <div className={classes.container}>
          <div className={classes.button} onClick={() => setOpen(false)}>
            X
          </div>
          <div className="ml-6">
            <p className="text-md font-semibold capitalize text-headingColor lg:relative z-50 w-screen -mt-1 lg:-mt-0 fixed before:absolute before:rounded-lg before:content before:w-[6%] before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
              Curry Dishes
            </p>
          </div>
          <div className="lg:flex lg:gap-10 -ml-[22px] lg:ml-[43px]">
            <div className="lg:w-330 w-[80%] md:w-340 ml-10 mt-[78px] lg:mt-12 md:min-w-[340px] h-auto lg:min-w-[300px] bg-cardOverlay p-2 rounded-lg backdrop-blur-lg my-12 hover:drop-shadow-lg">
              <div className="w-full flex items-center justify-between">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={Chi}
                  alt="yellow-chicken-rise"
                  className="lg:w-[31%] w-[40%] -mt-8 drop-shadow-2xl"
                />
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                >
                  <MdShoppingBasket className="text-white text-[1rem]" />
                </motion.div>
              </div>
              <div className="w-full mt-3 lg:mt-0 flex flex-col gap-4 items-end justify-end">
                <p className="text-textColor font-semibold lg:text-base text-sm md:text-lg">
                  Yellow Chicken and Rice
                </p>
                {/* <p className="mt-1 text-sm text-gray-500">45 Calories</p> */}
                <div className="flex items-center gap-8">
                  <p className="lg:text-lg text-sm text-headingColor font-semibold">
                    <span className="text-sm text-red-500">$</span> 5.25
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-[36.3%] w-[80%] md:w-340 ml-10 mt-8 lg:mt-12 md:min-w-[340px] h-auto lg:min-w-[300px] bg-cardOverlay p-2 rounded-lg backdrop-blur-lg my-12 hover:drop-shadow-lg">
              <div className="w-full flex items-center justify-between">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={PotaChi}
                  alt="spicy-chicken-rice"
                  className="lg:w-[31%] w-[40%] -mt-8 drop-shadow-2xl"
                />
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                >
                  <MdShoppingBasket className="text-white text-[1rem]" />
                </motion.div>
              </div>
              <div className="w-full mt-2 lg:mt-0 flex flex-col gap-4 items-end justify-end">
                <p className="text-textColor font-semibold lg:text-base text-sm md:text-lg">
                  Spicy Chicken and Rice
                </p>
                {/* <p className="mt-1 text-sm text-gray-500">45 Calories</p> */}
                <div className="flex items-center gap-8">
                  <p className="lg:text-lg text-sm text-headingColor font-semibold">
                    <span className="text-sm text-red-500">$</span> 5.25
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:flex-row flex-col gap-10 mt-[-20px] lg:-mt-8 ml-[-20px] lg:ml-[43px]">
            <div className="lg:w-[40%] w-[80%] md:w-340 ml-10 mt-8 md:min-w-[340px] h-auto lg:min-w-[300px] bg-cardOverlay p-2 rounded-lg backdrop-blur-lg my-12 hover:drop-shadow-lg">
              <div className="w-full flex items-center justify-between">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={RoastChi}
                  alt="easy-mexican-rice"
                  className="w-[37%] -mt-8 drop-shadow-2xl"
                />
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                >
                  <MdShoppingBasket className="text-white text-[1rem]" />
                </motion.div>
              </div>
              <div className="w-full mt-2 lg:mt-3 flex flex-col gap-4 items-end justify-end">
                <p className="text-textColor font-semibold lg:text-base text-sm md:text-lg">
                  Easy Mexican Rice
                </p>
                {/* <p className="mt-1 text-sm text-gray-500">45 Calories</p> */}
                <div className="flex items-center gap-8">
                  <p className="lg:text-lg text-sm text-headingColor font-semibold">
                    <span className="text-sm text-red-500">$</span> 5.25
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-[36.3%] w-[80%] md:w-340 ml-10 mt-8 lg:mt-8 md:min-w-[340px] h-auto lg:min-w-[300px] bg-cardOverlay p-2 rounded-lg backdrop-blur-lg my-12 hover:drop-shadow-lg">
              <div className="w-full flex items-center justify-between">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={RedChi}
                  alt="red-rice"
                  className="w-[45%] -mt-8 drop-shadow-2xl"
                />
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                >
                  <MdShoppingBasket className="text-white text-[1rem]" />
                </motion.div>
              </div>
              <div className="w-full mt-3 lg:mt-0 flex flex-col gap-4 items-end justify-end">
                <p className="text-textColor font-semibold lg:text-base text-sm md:text-lg">
                  Nigerian Jollof Rice
                </p>
                {/* <p className="mt-1 text-sm text-gray-500">45 Calories</p> */}
                <div className="flex items-center gap-8">
                  <p className="lg:text-lg text-sm text-headingColor font-semibold">
                    <span className="text-sm text-red-500">$</span> 5.25
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CurryContainer;