import React from 'react';

export interface IErrorTextProps {
  error: string;
}

const ErrorText: React.FunctionComponent<IErrorTextProps> = props => {
  const { error } = props;

  if (error === '') return null;

  return <small className="text-red-400 relative">{error}</small>;
}

export default ErrorText;