class MyPromise {
constructor(resolveOrRejectCB){
    this.resolveOrRejectCB = resolveOrRejectCB(resolve);
};
    onResolve;
    fulfilled = false;
    called = false;
    value;

    then = function(cb){
        onResolve = cb;
        return this;
    }

    catch = function(cb){

        onReject = cb;
        return this;
    }

    resolve(val) {
        fulfilled = true;
        value = val;

        if (typeof onResolve === 'function'){
            onResolve(val);
            called = true;
        }
    }
}

new MyPromise((resolve) => setTimeout(() => resolve(1), 1000)).then(val => console.log(val));
