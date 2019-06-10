import React from 'react';
import PropTypes from 'prop-types';

const textTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'strong', 'b', 'em', 'i'];

const VnText = props => {
  const TextTagElement = textTags[props.tag] || null;

  if (TextTagElement) {
    return <TextTagElement>{props.children}</TextTagElement>;
  } else {
    return <React.Fragment>{props.children}</React.Fragment>;
  }
};

VnText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.Element)
  ]),
  tag: PropTypes.string
};

export default VnText;
