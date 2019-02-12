import * as React from 'react';
import { GlobleStyle } from './style';
import { GlobleIconfont } from './static/iconfont'
import { Home } from './pages';

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
