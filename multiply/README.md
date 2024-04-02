# The Multiply Challenge

A critical bug has been found in Node.js! The `*` operator (multiplication) has stopped working! 😮

Until a patch is released, your team will need a different way to multiply numbers.

You have been tasked to make a Javascript function called `multiply`, which takes two numbers as arguments, and returns the product.

Simple enough, right?

Here are a few examples of expected behavior:

```js
multiply(2, 4); // returns -> 8
multiply(5, 10); // returns -> 50
multiply(1, 1); // returns -> 1
```

Instructions:

- Find the already started `multiply` function inside of `multiply.js`
- Write code within the body of the function so that the returned value is functionally equivilant to that of the `*` operator
- Keep your work within the body of the function
- Your code cannot depend on the `*` operator to find the product, but all other operators and JS syntax is allowed
- To test your function, run this command from the root of the project: `npm test:multiply`
