import * as React from 'react';
import { CreateContainer, Header, MainContainer } from './components';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';

export interface IAppProps {
}

export function App (props: IAppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 p-4 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}
