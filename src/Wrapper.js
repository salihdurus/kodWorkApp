import React from 'react';
import Router from './Router';
import FavoriteJobProvider from './context/FavoriteJobProvider';

export default () => {
  return (
    <FavoriteJobProvider>
      <Router />
    </FavoriteJobProvider>
  );
};
