import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: '90vw',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
    [theme.breakpoints.up('md')]: {
      width: '50vw'
    },
    [theme.breakpoints.up('lg')]: {
      width: '40vw'
    }
  }
}));

const getModalStyle = () => {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  };
};

const EditTopicForm = props => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <div style={modalStyle} className={classes.paper}>
      <Typography variant="h5">{props.topic.title}</Typography>
      <Typography variant="body1">{props.topic.body}</Typography>
    </div>
  );
};

EditTopicForm.propTypes = {
  topic: PropTypes.object.isRequired
};

export default EditTopicForm;
