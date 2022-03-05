import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './reducers';
import initialState from './store';

const FavoriteJobProvider = ({children}) => {
  const store = createStore(reducers, initialState);
  return <Provider store={store}>{children}</Provider>;
};
export default FavoriteJobProvider;
