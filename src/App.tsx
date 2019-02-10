import * as React from 'react';
import store from './store'
import { GlobleStyle } from './style';
import { GlobleIconfont } from './static/iconfont'
import { Home } from './pages';

const store1 = store;
console.log(store1);
const App = () => {
  return (
    <div>
      <GlobleStyle />
      <GlobleIconfont />
      <Home />
    </div>
  );
};

export default App;
