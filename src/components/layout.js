import React from 'react';
import PropTypes from 'prop-types';

import { Head, Nav } from '@components';
import { GlobalStyle, theme } from '@styles';

const Layout = ({ children }) => {
  return (
    <div id='root'>
      <Head />
      <GlobalStyle />
      {/* Skip to content here */}
      {/* Isloading here */}
      <div className='container'>
        <Nav />
        {/* <Social /> */}
        {/* <Email /> */}
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
