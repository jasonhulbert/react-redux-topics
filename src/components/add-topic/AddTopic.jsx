import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormGroup,
  TextField
} from '@material-ui/core';

import * as topicActions from '../../store/actions/topicActions';

class AddTopic extends React.Component {
  state = {
    topic: {
      id: '',
      title: '',
      body: ''
    }
  };

  constructor(props) {
    super(props);
  }

  handleTitleChange = evt => {
    const topic = { ...this.state.topic, title: evt.target.value };
    this.setState({ topic });
  };

  handleBodyChange = evt => {
    const topic = { ...this.state.topic, body: evt.target.value };
    this.setState({ topic });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.dispatch(topicActions.createTopic(this.state.topic));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Card>
          <CardContent>
            <FormGroup>
              <FormControl>
                <TextField
                  label="Title"
                  placeholder="New Topic"
                  variant="outlined"
                  margin="dense"
                  onChange={this.handleTitleChange}
                  value={this.state.topic.title}
                />
              </FormControl>
              <FormControl>
                <TextField
                  label="Body"
                  multiline={true}
                  variant="outlined"
                  margin="dense"
                  rows="3"
                  value={this.state.topic.body}
                  onChange={this.handleBodyChange}
                />
              </FormControl>
            </FormGroup>
          </CardContent>
          <CardActions>
            <Button type="submit" color="primary" aria-label="Add Topic">
              <AddIcon />
              Add Topic
            </Button>
          </CardActions>
        </Card>
      </form>
    );
  }
}

AddTopic.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    topics: state.topics
  };
};

export default connect(mapStateToProps)(AddTopic);
