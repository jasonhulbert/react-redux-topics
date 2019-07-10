import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';

import EditTopicForm from './EditTopicForm';

class EditTopic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <div>
          <EditTopicForm topic={this.props.topic} />
        </div>
      </Modal>
    );
  }
}

EditTopic.propTypes = {
  topic: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default EditTopic;
