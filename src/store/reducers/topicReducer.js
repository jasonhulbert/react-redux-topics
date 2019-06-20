import { topicActionTypes } from '../types/topicActionTypes';
import { generateTopicId } from '../effects/generateTopicId';

export const topicReducer = (state = [], action) => {
  switch (action.type) {
    case topicActionTypes.CREATE_TOPIC:
      return [...state, {...action.topic, id: generateTopicId(action.topic.title) }]
    case topicActionTypes.DELETE_TOPIC:
      return state.filter(topic => topic.id != action.topic.id);
    default:
      return state;
  }
};
