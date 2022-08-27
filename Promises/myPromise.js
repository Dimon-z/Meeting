class MyPromise {
constructor(resolveOrRejectCB){
    let onResolve;
    let onReject;
    this.then = function(cb){
        onResolve = cb;
        return this;
    }
    this.catch = function(cb){

        onReject = cb;
        return this;
    }
    this.resolve = resolveOrRejectCB;
}
resolve(data){
onResolve(data);
}
}

new MyPromise((resolve) => setTimeout(() => resolve(1000), 1000)).then(val => console.log(val));
