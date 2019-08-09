import React from 'react';
import Header from './common/header'
import { GlobalStyled } from './style.js';
import store from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <GlobalStyled/>
      <Header/>
    </Provider>
  );
}

export default App;
