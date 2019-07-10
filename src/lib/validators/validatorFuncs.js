const validatorTypes = {
  NO_EMPTY: 'NO_EMPTY'
};

const validatorFuncs = {
  noEmpty: value => {
    let result = {
      type: validatorTypes.NO_EMPTY
    };

    if (!value || value == undefined || value == '') {
      result.valid = false;
    } else {
      result.valid = true;
    }

    return result;
  }
};

export default validatorFuncs;
