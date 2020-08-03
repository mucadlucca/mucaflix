import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import StoreVideo from './pages/store/Video'
import StoreCategory from './pages/store/Category'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={StoreVideo} />
      <Route path="/cadastro/categoria" component={StoreCategory} />
      {/* <Route component={404} />       */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
