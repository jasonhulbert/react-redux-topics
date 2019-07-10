import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

import * as topicActions from '../../../store/actions/topicActions';
import PageTitle from '../../common/PageTitle';
import CreateTopic from '../../create-topic/CreateTopic';
import TopicList from '../../topic-list/TopicList';
import EditTopic from '../../edit-topic/EditTopic';

class TopicsPage extends React.Component {
  state = {
    topics: [],
    editOpen: false,
    editTopic: {}
  };

  handleCreate = topic => {
    this.props.dispatch(topicActions.createTopic(topic));
  };

  handleDelete = topic => {
    this.props.dispatch(topicActions.deleteTopic(topic));
  };

  handleEdit = topic => {
    this.setState({
      editTopic: topic,
      editOpen: true
    });
  };

  handleEditModalClose = () => {
    this.setState({
      editTopic: {},
      editOpen: false
    });
  };

  render() {
    return (
      <Container>
        <PageTitle title="Topics" />

        <CreateTopic onSubmit={this.handleCreate} />

        <TopicList
          topics={this.props.topics}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
        />

        <EditTopic
          topic={this.state.editTopic}
          open={this.state.editOpen}
          onClose={this.handleEditModalClose}
        />
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
