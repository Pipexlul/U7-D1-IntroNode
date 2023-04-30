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

/**
 * Create an object with appointment parameters based on an array of values.
 *
 * @param {Array} params - An array containing the following values, in order:
 *   - animalName (string): The name of the animal.
 *   - animalAge (string): The age of the animal.
 *   - animalType (string): The type of animal.
 *   - animalColor (string): The color of the animal.
 *   - sickness (string): The sickness the animal is suffering from.
 * @returns {Object} An object with the following properties:
 *   - nombre (string): The name of the animal.
 *   - edad (string): The age of the animal.
 *   - animal (string): The type of animal.
 *   - color (string): The color of the animal.
 *   - enfermedad (string): The sickness the animal is suffering from.
 */
const objectifyAppointmentParams = ([
  animalName,
  animalAge,
  animalType,
  animalColor,
  sickness,
]) => ({
  nombre: animalName,
  edad: animalAge,
  animal: animalType,
  color: animalColor,
  enfermedad: sickness,
});

export { checkValidParams, objectifyAppointmentParams };
