import * as React from 'react';
import { GlobleStyle } from './style';
import { GlobleIconfont } from './static/iconfont'
import Header from './components/header';
import Footer from './components/footer';
import { Discover } from './pages';

const App = () => {
  return (
    <div>
      <GlobleStyle />
      <GlobleIconfont />
      <Header />
      <Discover />
      <Footer />
    </div>
  );
};

export default App;
