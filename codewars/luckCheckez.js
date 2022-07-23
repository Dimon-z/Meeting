function luckCheck(str) {
  const number = +str;
  if ((str.trim() === '') || (str.includes(' '))) {
    throw new Error('Error string is empty');
  }
  if (isNaN(+str) || /[a-zA-Z]/.test(str) || str === null) {
    throw new Error('Error enter valid string that contains number');
  } else {
    const { length } = str;
    if ((length % 2) === 0) {
      const breaking = (length / 2);
      const firstHalf = (Array.from(str.slice(0, breaking))).reduce((previousValue, currentValue) => +previousValue + +currentValue, 0);
      const secondHalf = (Array.from(str.slice(breaking, length))).reduce((previousValue, currentValue) => +previousValue + +currentValue, 0);
      return (firstHalf === secondHalf);
    }
    const breaking = Math.trunc(length / 2);
    const firstHalf = (Array.from(str.slice(0, breaking))).reduce((previousValue, currentValue) => +previousValue + +currentValue, 0);
    const secondHalf = (Array.from(str.slice((breaking + 1), length))).reduce((previousValue, currentValue) => +previousValue + +currentValue, 0);
    return (firstHalf === secondHalf);
  }
}

console.log(luckCheck(''));
