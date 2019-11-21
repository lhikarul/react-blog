import React from 'react';
import Header from './common/header';
import {GlobalStyle} from './style';
import './statics/iconfont/icofont.css';

import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store';

import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    </div>
  );
}

export default App;
