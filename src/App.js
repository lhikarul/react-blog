import React from 'react';
import Header from './common/header';
import {GlobalStyle} from './style';
import './statics/iconfont/icofont.css';

import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store';

import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Provider store={store}>

          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>

      </Provider>
    </div>
  );
}

export default App;
