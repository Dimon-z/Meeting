let promise = new Promise(function(resolve, reject) {

    setTimeout(() => resolve(10), 1000); 
  
  })
  promise.then(function(result) { 
  
    console.log('line8 '+result); 
    return result * 2;
  
  }).then(function(result) { 
  
    console.log('line13 '+result); 
    return result * 2;
  
  }).then(function(result) {
  
    console.log('line18 '+result); 
    return result * 2;
  
  });

promise.then((resultat)=>{
    console.log('line24 '+resultat)
    resultat+=1
return resultat
})

promise.then(function(res) {
    console.log('line30 '+res)
    res = res/2
    return  res
})

promise.then((res)=>{
    console.log("line36 "+res)
})

class Thenable {
    constructor(num){
       this.num = num
    }
    then(resolve, reject){
        console.log(resolve);
        setTimeout(() => resolve(this.num * 2),1000);
    }
}

new Promise(resolve => resolve(2))
  .then(result => {
    return new Thenable(result); 
  })
  .then(console.log)
  .catch(console.log); 

new Promise((resolve,reject)=>resolve(1))
.then(()=>setTimeout(()=>{
    console.log('here error');
    return new Error(`JS RIP Now`);
},2000)).catch(console.log)
setTimeout(()=>console.log(11),1000)
