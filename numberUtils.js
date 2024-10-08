"use strict";

/**
 * Converts an angle in radians to degrees
 * @param {number} rad - The angle in radians
 * @returns {number} The angle in degrees
 */
function toDeg(rad) {
  return rad * 180 / Math.PI;
}

/**
 * Converts an angle in degrees to radians
 * @param {number} rad - The angle in degrees
 * @returns {number} The angle in radians
 */
function toRad(deg) {
  return deg * Math.PI / 180;
}

/**
 * Wraps a value between a min and max where any out-of-bounds number will be added or subtracted by the range until it falls within the boundary [min, max)
 * @param {number} min - The minimum value of the wrap range, the return value can equal this number
 * @param {number} max - The maximum vlaue of the wrap range, the return value may not equal this number
 * @param {number} x - The number to wrap
 * @returns {number} The wrapped number on the range [min, max)
 */
function wrap(min, max, x) {
    const wrapRange = max - min;

    while (x < min) x += wrapRange;
    while (x >= max) x -= wrapRange;

    return x;
}

/**
 * Clamps a value between a min and max where any out-of-bounds number will become either the min or the max depending on which direction it has left the range [min, max]
 * @param {number} min - The minimum value of the clamp range, the return value can equal this number
 * @param {number} max - The maximum vlaue of the clamp range, the return value can equal this number
 * @param {number} x - The number to clamp
 * @returns {number} The clamped number on the range [min, max]
 */
function clamp(min, max, x) {
    if (x > max) return max;
    if (x < min) return min;
    return x;
}

/**
 * Maps a number from one interpolation range to another
 * @param {number} a1 - The min of the current range
 * @param {number} b1 - The max of the current range
 * @param {number} a2 - The min of the new range
 * @param {number} b2 - The max of the new range
 * @param {number} x - The number on range a1 to b1
 * @returns {number} The number on range a2 to b2
 */
function map(a1, b1, a2, b2, x) {
  return (x - a1) / (b1 - a1) * (b2 - a2) + a2;
}

/**
 * (Linear Interpolate) Interpolates between two values a and b with t=0 being a and t=1 being b
 * @param {number} a - The value at t=0
 * @param {number} b - The value at t=1
 * @param {number} t - The interpolation value
 * @returns {number} The interpolated value
 */
function lerp(a, b, t) {
    return a + (b - a) * t;
}

export { toDeg, toRad, wrap, clamp, map, lerp };
