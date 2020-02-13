import React from 'react';
import { Link } from 'react-router-dom';

import { pullRight, h1 } from '../css/layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Link to="/">
        <h1 className={h1}>
          webpack-for-react
        </h1>
      </Link>
      {children}
      <hr />
      <p className={pullRight}>
        Made with Love by Esau Silva
      </p>
    </div>
  );
};

export default Layout;
