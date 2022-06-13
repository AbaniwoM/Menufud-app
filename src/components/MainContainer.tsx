import React from 'react';
import HomeContainer from './HomeContainer';
// import HomeContainer from './HomeContainer';
export interface IMainContainerProps {
}

export function MainContainer (props: IMainContainerProps) {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />

      <section className="w-full">
        <div className="w-full flex items-center justify-between">

        </div>
      </section>
    </div>
  );
}

export default MainContainer;
