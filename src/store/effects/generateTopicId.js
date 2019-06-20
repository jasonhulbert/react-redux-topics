import shortid from 'shortid';

export const generateTopicId = () => {
  return shortid.generate();
};
