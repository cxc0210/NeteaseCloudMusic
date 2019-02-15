import * as React from 'react';
import { GlobleStyle } from './style';
import { GlobleIconfont } from './static/iconfont'
import { Discover } from './pages';

const App = () => {
  return (
    <div>
      <GlobleStyle />
      <GlobleIconfont />
      <Discover />
    </div>
  );
};

export default App;
