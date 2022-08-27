Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then(console.log);

  Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise((resolve,reject) => setTimeout(() => reject(new Error(`1guf rip`)), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then(console.log
   ).catch(console.log);

   Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 1000)
    }),
    2,
    3
  ]).then(console.log); // 1, 2, 3

//--------------------------------------------------------------------------------------------------
  Promise.allSettled([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), 
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), 
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  
  ]).then(console.log);

  Promise.allSettled([
    new Promise(resolve => setTimeout(() => resolve(4), 3000)), 
    new Promise((resolve,reject) => setTimeout(() => reject(new Error(`2guf rip`)), 2000)), 
    new Promise(resolve => setTimeout(() => resolve(5), 1000))  
  ]).then(console.log
   ).catch(console.log);

   Promise.allSettled([
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(9), 1000)
    }),
    8,
    7
  ]).then(console.log); 
//----------------------------------------------------------------------------------------------------
  Promise.race([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then(console.log);

  Promise.race([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise((resolve,reject) => setTimeout(() => reject(new Error(`3guf rip`)), 500)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then(console.log
   ).catch(console.log);

   Promise.race([
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 1000)
    }),
    2,
    3
  ]).then(console.log); // 1, 2, 3

//------------------------------------------------------------------------------------------------------

Promise.any([
    new Promise(resolve => setTimeout(() => resolve(`ggs`), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(`2s`), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(`3s`), 1000))  // 3
  ]).then(console.log);

  Promise.any([
    new Promise((resolve,reject) => setTimeout(() => reject(new Error(`guf rip1`)), 1000)), // 1
    new Promise((resolve,reject) => setTimeout(() => reject(new Error(`guf rip2`)), 2000)), // 2
    new Promise((resolve,reject) => setTimeout(() => reject(new Error(`guf rip3`)), 5000))  // 3
  ]).then(console.log
   ).catch(console.log);

   Promise.any([
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 1000)
    }),
    2,
    new Error(`ffs`)
  ]).then(console.log); // 1, 2, 3