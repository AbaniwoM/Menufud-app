import React from 'react';
import {  Header, MainContainer } from './components';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
// import { getAllFoodItems } from './utils/firebaseFunctions';
// import { useStateValue } from './context/StateProvider';
// import { actionType } from './context/reducer';
import Dashboard from './components/Dashboard';
import Register from './pages/auth/Register';
import Login  from './pages/auth/Login';

export interface IAppProps {
}

export function App (props: IAppProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [{foodItems}, dispatch] = useStateValue();

  // const fetchData:any = async () => {
  //   await getAllFoodItems().then(data => {
  //     dispatch({
  //       type : actionType.SET_FOOD_ITEMS,
  //       foodItems : data
  //     })
  //   });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 p-4 w-full bg-primary">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            {/* <Route path="/createItem" element={<CreateContainer />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/register"
              element={
                <Register
                  name={""}
                  error={undefined}
                  code={undefined}
                  info={undefined}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  name={""}
                  error={undefined}
                  code={undefined}
                  info={undefined}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}
