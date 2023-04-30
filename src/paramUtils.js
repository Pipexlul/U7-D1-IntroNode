/**
 * Checks if the given parameter array is valid according to the provided options.
 *
 * @param {Array} paramArray - An array of parameters to check.
 * @param {Object} paramOptions - An object containing options for the validation.
 * @param {boolean} paramOptions.allNotNull - If true, all parameters must be non-null.
 *
 * @returns {Object} - An object containing a "valid" boolean and a "reason" string.
 * If "valid" is true, the parameters are valid. If "valid" is false, "reason" contains
 * a message describing why the parameters are invalid.
 */
const checkValidParams = (paramArray, paramOptions) => {
  const result = {
    valid: false,
    reason: "",
  };

  if (paramOptions.allNotNull && !paramArray.every((param) => param ?? false)) {
    result.reason = "All parameters must be non-null";
    return result;
  }

  result.valid = true;
  return result;
};

export { checkValidParams };
