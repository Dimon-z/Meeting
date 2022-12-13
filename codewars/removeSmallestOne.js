/* Task

Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
If there are multiple elements with the same value, remove the one with a lower index. 
If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

 */
let x = [131,42];
let log = console.log

function removeSmallest(numbers) {
    if(numbers.lenght = 0){
    return [];
    }
    let noSmallest = numbers.slice()
    log(noSmallest)
    let min = noSmallest[0];
    let position = 0;
    noSmallest.forEach((element, index )=> {
        if (element<min){
            min = element ;
            position = index;
        }
    });
    noSmallest.splice(position,1)
    return noSmallest;
  }
  
  log(removeSmallest(x))

/*   function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  } */