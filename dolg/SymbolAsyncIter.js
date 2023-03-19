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