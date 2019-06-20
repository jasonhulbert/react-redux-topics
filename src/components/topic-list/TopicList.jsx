import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const TopicList = props => (
  <Grid container spacing={2}>
    {props.topics.map(topic => (
      <Grid item key={topic.id} xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h4">{topic.title}</Typography>
            <Typography>{topic.body}</Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="secondary"
              onClick={props.onDelete.bind(this, topic)}>
              <DeleteIcon />
              Remove Topic
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
);

TopicList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  topics: PropTypes.array.isRequired
};

export default TopicList;
