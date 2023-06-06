import{a as j}from"./chroma-js-c1bd14d8.js";import{t as I}from"./type-detect-77a4e3ba.js";var v={exports:{}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */var S=I;function M(){this._key="chai/deep-eql__"+Math.random()+Date.now()}M.prototype={get:function(r){return r[this._key]},set:function(r,t){Object.isExtensible(r)&&Object.defineProperty(r,this._key,{value:t,configurable:!0})}};var b=typeof WeakMap=="function"?WeakMap:M;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function x(e,r,t){if(!t||m(e)||m(r))return null;var u=t.get(e);if(u){var s=u.get(r);if(typeof s=="boolean")return s}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function a(e,r,t,u){if(!(!t||m(e)||m(r))){var s=t.get(e);s?s.set(r,u):(s=new b,s.set(r,u),t.set(e,s))}}/*!
 * Primary Export
 */v.exports=n;v.exports.MemoizeMap=b;function n(e,r,t){if(t&&t.comparator)return A(e,r,t);var u=P(e,r);return u!==null?u:A(e,r,t)}function P(e,r){return e===r?e!==0||1/e===1/r:e!==e&&r!==r?!0:m(e)||m(r)?!1:null}/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function A(e,r,t){t=t||{},t.memoize=t.memoize===!1?!1:t.memoize||new b;var u=t&&t.comparator,s=x(e,r,t.memoize);if(s!==null)return s;var c=x(r,e,t.memoize);if(c!==null)return c;if(u){var l=u(e,r);if(l===!1||l===!0)return a(e,r,t.memoize,l),l;var o=P(e,r);if(o!==null)return o}var i=S(e);if(i!==S(r))return a(e,r,t.memoize,!1),!1;a(e,r,t.memoize,!0);var E=U(e,r,i,t);return a(e,r,t.memoize,E),E}function U(e,r,t,u){switch(t){case"String":case"Number":case"Boolean":case"Date":return n(e.valueOf(),r.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===r;case"Error":return g(e,r,["name","message","code"],u);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return f(e,r,u);case"RegExp":return k(e,r);case"Generator":return h(e,r,u);case"DataView":return f(new Uint8Array(e.buffer),new Uint8Array(r.buffer),u);case"ArrayBuffer":return f(new Uint8Array(e),new Uint8Array(r),u);case"Set":return T(e,r,u);case"Map":return T(e,r,u);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(r);case"Temporal.Duration":return e.total("nanoseconds")===r.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===r.toString();default:return _(e,r,u)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function k(e,r){return e.toString()===r.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function T(e,r,t){if(e.size!==r.size)return!1;if(e.size===0)return!0;var u=[],s=[];return e.forEach(function(l,o){u.push([l,o])}),r.forEach(function(l,o){s.push([l,o])}),f(u.sort(),s.sort(),t)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function f(e,r,t){var u=e.length;if(u!==r.length)return!1;if(u===0)return!0;for(var s=-1;++s<u;)if(n(e[s],r[s],t)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function h(e,r,t){return f(y(e),y(r),t)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function F(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function q(e){if(F(e))try{return y(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function y(e){for(var r=e.next(),t=[r.value];r.done===!1;)r=e.next(),t.push(r.value);return t}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function z(e){var r=[];for(var t in e)r.push(t);return r}function w(e){for(var r=[],t=Object.getOwnPropertySymbols(e),u=0;u<t.length;u+=1){var s=t[u];Object.getOwnPropertyDescriptor(e,s).enumerable&&r.push(s)}return r}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function g(e,r,t,u){var s=t.length;if(s===0)return!0;for(var c=0;c<s;c+=1)if(n(e[t[c]],r[t[c]],u)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function _(e,r,t){var u=z(e),s=z(r),c=w(e),l=w(r);if(u=u.concat(c),s=s.concat(l),u.length&&u.length===s.length)return f(D(u).sort(),D(s).sort())===!1?!1:g(e,r,u,t);var o=q(e),i=q(r);return o.length&&o.length===i.length?(o.sort(),i.sort(),f(o,i,t)):u.length===0&&o.length===0&&s.length===0&&i.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function m(e){return e===null||typeof e!="object"}function D(e){return e.map(function(t){return typeof t=="symbol"?t.toString():t})}var C=v.exports;const B=j(C);export{B as e};
