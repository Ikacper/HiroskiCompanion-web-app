import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar/Navbar';

export default function PageTemplate({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
