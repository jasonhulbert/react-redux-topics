import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Box, Container, Typography } from '@material-ui/core';

import * as topicActions from '../../../store/actions/topicActions';
import AddTopic from '../../add-topic/AddTopic';
import TopicList from '../../topic-list/TopicList';

class TopicsPage extends React.Component {
  state = {
    topics: []
  };

  onDelete = topic => {
    this.props.dispatch(topicActions.deleteTopic(topic));
  };

  render() {
    return (
      <Container>
        <Box my={5}>
          <Typography variant="h2">Topics</Typography>
        </Box>

        <Box my={5}>
          <AddTopic />
        </Box>

        <Box my={5}>
          <TopicList topics={this.props.topics} onDelete={this.onDelete} />
        </Box>
      </Container>
    );
  }
}

TopicsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  topics: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    topics: state.topics
  };
};

export default connect(mapStateToProps)(TopicsPage);
