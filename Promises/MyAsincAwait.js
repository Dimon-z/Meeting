function waiter(generatorFunction){
    const generatorObj = generatorFunction();
    const firstResult = generatorObj.next();
    const recursia = function (result){
        const p = result.value;
        const ourPromise = new Promise((resolve => {resolve(p);}))
        return ourPromise.then( data =>{
            const result2 = generatorObj.next(data);
        if (result2.done) {
            const finalMessage = result2.value
            return new Promise((resolve=>{resolve(finalMessage)}))
        }
        return recursia(result2)
        })
    }
    return(recursia(firstResult))
}