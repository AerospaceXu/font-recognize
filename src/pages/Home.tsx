import React from 'react';

import { isSupportFontFamily } from '../app/utils/isSupportFontFamily';

const Home: React.FC = () => {
  console.log(isSupportFontFamily('PingFang SC'));
  return <h1>Home Page Works!!!</h1>;
};

export default Home;
