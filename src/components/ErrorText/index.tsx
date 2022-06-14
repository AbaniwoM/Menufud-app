import React from 'react';

export interface IErrorTextProps {
  error: string;
}

const ErrorText: React.FunctionComponent<IErrorTextProps> = props => {
  const { error } = props;

  if (error === '') return null;

  return (
    <small className="text-red-400 text-[0.6rem] lg:text-[0.85rem] -ml-1 lg:ml-10 relative">
      {error}
    </small>
  );
};

export default ErrorText;