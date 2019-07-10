import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { topicValidator } from '../../lib/validators/topicValidator';

class CreateTopic extends React.Component {
  state = {
    topic: {
      title: '',
      body: ''
    },
    validation: {
      title: true,
      body: true
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

    const { title, body } = topicValidator.validate(this.state.topic);

    this.setState({ validation: { title: title.valid, body: body.valid } });

    if (title.valid === true && body.valid === true) {
      this.props.onSubmit(this.state.topic);
    }
  };

  render() {
    return (
      <Box my={5}>
        <form onSubmit={this.handleSubmit}>
          <Card>
            <Box p={2}>
              <CardContent>
                <Typography variant="h5">Create a Topic</Typography>
                <FormGroup>
                  <FormControl>
                    <TextField
                      label="Title"
                      margin="normal"
                      error={this.state.validation.title === false}
                      value={this.state.topic.title}
                      onChange={this.handleTitleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <TextField
                      label="Body"
                      multiline={true}
                      margin="normal"
                      rows="3"
                      error={this.state.validation.body === false}
                      value={this.state.topic.body}
                      onChange={this.handleBodyChange}
                    />
                  </FormControl>
                </FormGroup>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  aria-label="Add Topic">
                  <AddIcon />
                  Add Topic
                </Button>
              </CardActions>
            </Box>
          </Card>
        </form>
      </Box>
    );
  }
}

CreateTopic.propTypes = {
  onSubmit: PropTypes.func
};

export default CreateTopic;
