import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container y={10}>
        <Box my={5}>
          <Typography variant="h2">Home</Typography>
        </Box>
      </Container>
    );
  }
}

export default HomePage;
