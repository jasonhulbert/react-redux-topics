import validatorFuncs from './validatorFuncs';
import validatorFactory from './validatorFactory';

export const topicValidator = validatorFactory([
  {
    key: 'title',
    func: validatorFuncs.noEmpty
  },
  {
    key: 'body',
    func: validatorFuncs.noEmpty
  }
]);
