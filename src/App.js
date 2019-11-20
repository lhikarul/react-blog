import React from 'react';
import Header from './common/header';
import {GlobalStyle} from './style';
import './statics/iconfont/icofont.css';

import {Provider} from 'react-redux';
import store from './store';


function App() {
  return (
    <div>
      <GlobalStyle />
      <Provider store={store}>
          <Header />
      </Provider>
    </div>
  );
}

export default App;
