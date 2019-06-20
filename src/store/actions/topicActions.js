import { topicActionTypes } from '../types/topicActionTypes';

export const createTopic = topic => {
  return { type: topicActionTypes.CREATE_TOPIC, topic };
};

export const deleteTopic = topic => {
  return { type: topicActionTypes.DELETE_TOPIC, topic };
};
