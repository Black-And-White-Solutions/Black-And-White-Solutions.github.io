import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';
import FooterBar from './FooterBar';

const Layout = props => {
  return (
    <>
      <NavigationBar />
      {props.children}
      <FooterBar />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
