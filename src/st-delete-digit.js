import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit( n ) {
  let str = String(n);
  let len = str.length;
  let newNumber = '';
  for (let i = 0; i < len; i++) {
    if(Number(str[i]) < Number(str[i+1]) && Number(str[i]) < Number(str[i-1])) {
      newNumber += Number(str[i+1]) + Number(str[i-1]); 
    }
  }
  return Number(newNumber);
}
