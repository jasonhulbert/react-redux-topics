const validatorFactory = required => {
  return {
    validate: obj => {
      let result = {};

      required.forEach(({ key, func }) => {
        result[key] = func(obj[key]);
      });

      return result;
    }
  };
};

export default validatorFactory;
