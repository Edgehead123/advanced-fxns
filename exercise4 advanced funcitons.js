//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const add = (a=1, b=2) => a + b;

//Closure: What does the last line return?

const addTo = x => y => x + y
//addTo executes with param of 10, addTo = (x) so x =10
const addToTen = addTo(10)
//addToTen executes with param of 3, addTo(10) kept in memory
addToTen(3)
//10 + 3
//const addTo = (x) =>{
//	(y) => {
//	x + y    child scope always has access to parent scope
//} 
//}

Answer 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

answer 31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

answer 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
//from line 43 a=10
const add1 = (num) => num + 1;
//g=add5, 10+5 = 15
const add5 = (num) => num + 5;
//f =add1, 15 + 1 = 16
compose(add1, add5)(10)

answer 16

//What are the two elements of a pure function?
//input and return value 25% of the answer

1 deterministic .... if you give the same input you will always get the same results.
2 no side effects ... pure fxn does not depend on any state, or data, change durign execution: 
It must only depend on its input elements.