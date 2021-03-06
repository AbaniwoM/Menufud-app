import React, { useState } from "react";
import { MdShoppingBasket } from "react-icons/md";

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { app } from "../firebase.config";
import { motion } from "framer-motion";
import Logo from "../images/logo.png";
// import Avatar from "../images/avatar.png";
import { Link } from "react-router-dom";
// import { useStateValue } from '../context/StateProvider';
// import { actionType } from '../context/reducer';

export interface IHeaderProps {}

export const Header = (props: IHeaderProps) => {
  // const firebaseAuth = getAuth(app);
  // const provider = new GoogleAuthProvider();

  // const [{user}, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  // const login = async () => {
  //   if(!user) {
  //   const {
  //     // refreshToken
  //     user: {providerData},
  //     } = await signInWithPopup(firebaseAuth, provider);
  //     dispatch({
  //     type : actionType.SET_USER,
  //     user : providerData[0]
  //   });
  //   localStorage.setItem("user", JSON.stringify(providerData[0]));
  // }else{
  //   setIsMenu(!isMenu);
  // }
  // };

  // const logout = () => {
  //   setIsMenu(false)
  //   localStorage.clear()

  //   dispatch({
  //     type : actionType.SET_USER,
  //     user : null
  //   });
  // }

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Logo}
            className="w-8 object-cover"
            alt="logo"
          />
          <p className="text-headingColor text-xl font-bold">Menufud</p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <Link to={"/"}>
              <li
                className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                onClick={() => setIsMenu(false)}
              >
                Home
              </li>
            </Link>
            <li
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
              onClick={() => setIsMenu(false)}
            >
              Menu
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
              onClick={() => setIsMenu(false)}
            >
              About Us
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
              onClick={() => setIsMenu(false)}
            >
              Service
            </li>
          </motion.ul>
          <Link to="/register">
            <button
              type="button"
              className="bg-gradient-to-br from-orange-400 to-orange-400 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
            >
              Register
            </button>
          </Link>

          <Link to="/login">
            <button
              type="button"
              className="bg-gradient-to-br from-orange-400 to-orange-400 w-full md:w-auto px-7 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
            >
              Login
            </button>
          </Link>

          <motion.div
            whileTap={{ scale: 0.6 }}
            className="flex items-center justify-center relative"
          >
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            {/* <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div> */}
          </motion.div>

          {/* <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                {user && user.email === "michaelabaniwo@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div> */}
        </div>
      </div>

      {/* mobile */}
      <div className="flex -mt-[95px] items-center justify-between md:hidden w-full h-[30vh]">
        <div className="flex items-center justify-center relative">
          <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
          {/* <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">2</p>
          </div> */}
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Logo}
            className="w-8 object-cover"
            alt="logo"
          />
          <p className="text-headingColor text-xl font-bold">Menufud</p>
        </Link>

        <div className="relative z-auto -mt-[50px]">
          {/* <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
          /> */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="w-[310px] h-[6vh] shadow-xl rounded-lg flex absolute top-12 right-4"
          >
            {/* {user && user.email === "michaelabaniwo@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                    New Item <MdAdd />
                  </p>
                </Link>
              )} */}

            <ul className="flex">
              <Link to={"/"}>
                <li className="text-base font-bold text-[0.7rem] text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
                  Home
                </li>
              </Link>
              <li className="text-base z-20 text-[0.7rem] text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
                Menu
              </li>
              <li className="text-base text-[0.7rem] text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
                About Us
              </li>
              <li className="text-base text-[0.7rem] text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
                Service
              </li>
            </ul>

            {/* <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Logout <MdLogout />
              </p> */}
          </motion.div>
          <Link to="/register" className="absolute mt-[110px] right-[210px]">
            <button
              type="button"
              className="bg-gradient-to-br from-orange-300 to-orange-400 w-full md:w-auto px-4 py-2 text-[0.9rem] rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
            >
              Register
            </button>
          </Link>
          <Link to="/login" className="absolute mt-[110px] right-[35px]">
            <button
              type="button"
              className="bg-gradient-to-br from-orange-300 to-orange-400 w-full md:w-auto px-7 py-2 text-[0.9rem] rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
