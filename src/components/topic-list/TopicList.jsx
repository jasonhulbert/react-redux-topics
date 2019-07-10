import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const TopicList = props => (
  <Box my={5}>
    <Grid container spacing={2}>
      {props.topics.map(topic => (
        <Grid item key={topic.id} xs={12}>
          <Card>
            <Box p={2}>
              <CardContent>
                <Typography variant="h4">{topic.title}</Typography>
                <Typography>{topic.body}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  color="primary"
                  onClick={props.onEdit.bind(this, topic)}>
                  <EditIcon />
                  Modify Topic
                </Button>
                <Button
                  color="primary"
                  onClick={props.onDelete.bind(this, topic)}>
                  <DeleteIcon />
                  Remove Topic
                </Button>
              </CardActions>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

TopicList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  topics: PropTypes.array.isRequired
};

export default TopicList;
