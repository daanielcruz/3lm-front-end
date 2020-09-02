import React from 'react';
import { LoadingContainer, LoadingSpinner } from './styles';

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <LoadingSpinner />
    </LoadingContainer>
  );
};

export default Loading;
