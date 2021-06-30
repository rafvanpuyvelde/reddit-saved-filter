import React from 'react';

import AppContainer from '../app-container/AppContainer';
import AppWrapper from '../app-wrapper/AppWrapper';

const AppLayout: React.FC = ({ children }) => {
  return (
    <AppWrapper>
      <AppContainer>{children}</AppContainer>
    </AppWrapper>
  );
};

export default AppLayout;
