/* <!-- Task

John is a hacker. He succeeded in invading a server.

His next job is to write n numbers(1...n) in the memory of the server. He did this by using a virus code he wrote.

Unfortunately, since the server only accepts binary digits, and his virus code doesn't take into account the problem, only a fraction of the numbers are written into memory.

Given a number n, your task is to calculate how many numbers are written into memory.

Note, n may be very huge, so, it will be given by a string.
Example

For n = "10", the output should be 2.

2 number "1" and "10" are written into memory.

For n = "20", the output should be 3.

3 number "1", "10" and "11" are written into memory.

For n = "100", the output should be 4.

4 number "1", "10", "11" and "100" are written into memory.

 --> */

const number = '101';

function writtenNumbersCount(n) {
  const output = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] > 1) {
      output[i] = 1;
      for (i; i < n.length; i++) {
        output[i] = 1;
      }
      break;
    }
    if (n[i] > 0) {
      output[i] = 1;
    } else {
      output[i] = 0;
    }
  }
  const x = parseInt(output.join(''), 2);
  return x;
}

console.log(writtenNumbersCount(number));

/* function incompleteVirus(n){
    if (n==='') return 0;
    if (+n[0]>1) {
      return Math.pow(2,n.length)-1;
    } else {
      return Math.pow(2,n.length-1) + incompleteVirus(n.slice(1).replace(/^0+/,''));
    }
  } */
