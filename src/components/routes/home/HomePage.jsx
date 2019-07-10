import React from 'react';
import { Container } from '@material-ui/core';

import PageTitle from '../../common/PageTitle';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <PageTitle title="Home" />
      </Container>
    );
  }
}

export default HomePage;
