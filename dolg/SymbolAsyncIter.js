function test() {
    let i = -1;
    return {
        next() {
            ++i;
            if (i >= 10) {
                return Promise.resolve({
                    value: undefined,
                    done: true
                });
            }
            return Promise.resolve({
                value: i > 5 ? `Greater than 5: (${i})` : `Less than 5: (${i})`,
                done: false
            });
        }
    };
}

let a = {
    [Symbol.asyncIterator]: test
};

async function main() {
    for await (let x of a) {
        console.log(x)
    }
}

main()
    .then(r => console.log(r))
    .catch(err => console.log(err))


//------------------------------------------------------------------------------------//

async function* test1() {
    for (let i = 0; i < 10; ++i) {
        yield i > 5 ? `Greater than 5: (${i})` : `Less than 5: (${i})`;
    }
}

let b = {
    [Symbol.asyncIterator]: test1
};

async function main1() {
    for await (let x of b) {
        console.log(x)
    }
}

main1()
    .then(r => console.log(r))
    .catch(err => console.log(err))

//--------------------------------------------------------------------------------------//
//When a for await...of loop iterates over an iterable, it first gets the iterable's [@@asyncIterator]() method and calls it,
// which returns an async iterator. If the @asyncIterator method does not exist, it then looks for an [@@iterator]() method,
// which returns a sync iterator. The sync iterator returned is then wrapped into an async iterator by wrapping every object
// returned from the next(), return(), and throw() methods into a resolved or rejected promise, with the value property resolved 
//if it's also a promise. The loop then repeatedly calls the final async iterator's next() method and awaits the returned promise,
// producing the sequence of values to be assigned to variable.
//for await...of works on both sync and async iterables, while for...of only works on sync iterables.
//for await...of can only be used in contexts where await can be used, which includes inside an async function body and in a module.
//Even when the iterable is sync, the loop still awaits the return value for every iteration, leading to slower execution due to repeated promise unwrapping.
//If the iterable is a sync iterable that yields promises, for await...of would produce a sequence of resolved values,
//while for...of would produce a sequence of promises.
