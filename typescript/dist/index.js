function curry(fn) {
    const arity = fn.length;
    return function f1(...args) {
        if (args.length >= arity) {
            return fn(...args);
        } else {
            return function f2(...moreArgs) {
                return f1(...args.concat(moreArgs));
            }
        }
    }
}

function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3));

const arr = [1, 6, 2, 3, 4];
console.log([...new Set(arr)])

console.log(arr.reduce((acc, elem, index) => { return acc.includes(elem)? acc: [...acc, elem] }, []));

const copy = [...arr];
copy.sort();
console.log(copy, arr)