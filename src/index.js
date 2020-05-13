/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { getHeadingLevel } from './utils';

const HeadingLevel = createContext(1);

export const SemanticSection = forwardRef(({ element: El, children, ...props }, ref) => (
  <HeadingLevel.Consumer>
    {(level) => (
      <HeadingLevel.Provider value={level + 1}>
        {El ? <El ref={ref} {...props}>{children}</El> : children}
      </HeadingLevel.Provider>
    )}
  </HeadingLevel.Consumer>
));

SemanticSection.propTypes = {
  element: PropTypes.elementType,
  children: PropTypes.node,
};

export const H = forwardRef(({ level, ...props }, ref) => (
  <HeadingLevel.Consumer>
    {(autoLevel) => {
      const HeadingElement = `h${getHeadingLevel(autoLevel, level)}`;
      return <HeadingElement ref={ref} {...props} />;
    }}
  </HeadingLevel.Consumer>
));

H.propTypes = {
  level: PropTypes.number,
};
