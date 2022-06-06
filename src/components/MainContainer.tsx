import React from 'react';
import HomeContainer from './HomeContainer';
export interface IMainContainerProps {
}

export function MainContainer (props: IMainContainerProps) {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
    </div>
  );
}

export default MainContainer;
