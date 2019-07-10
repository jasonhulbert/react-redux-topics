import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const PageTitle = props => {
  return (
    <Box my={5}>
      <Typography variant="h2">{props.title}</Typography>
    </Box>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;
