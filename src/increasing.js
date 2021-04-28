/**
 * Compare two dates in increasing order using the native comparison
 * operators.
 *
 * @param {any} a The first parameter.
 * @param {any} b The second parameter.
 * @return {number} -1 if a < b, 1 if a > b, and 0 otherwise.
 */
const increasing = (a, b) => (a < b ? -1 : a > b ? 1 : 0);
export default increasing;
