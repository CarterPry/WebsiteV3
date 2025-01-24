---
title: 'JavaScript VS TypeScript'
excerpt: The Microsoft created language to replace the old Javascript and its faulty syntax.
publishDate: 'Jan 23 2024'
isFeatured: true
tags:
  - Programming
seo:
  image:
    src: '/jsVSts.png'
    alt: jsvs
---

![JS vs TS](/jsVSts.png)

## JavaScript
JavaScript is a well-known scripting language used for the functionality of web pages. It allows developers to implement certain aspects within a website, such as visual effects or dynamic content. 

The language cooperates with markup languages such as HTML and CSS. An extremely prevalent function used by programmers is its ability to display dynamic and visual effects for web pages. By interacting with the markup languages, JavaScript dramatically improves the user experience by creating visually pleasing and responsive websites. 

Another of JavaScript's most used features is its ability to work with Application Programming Interfaces (APIs).The language can store variables that hold useful data, such as user information that allows the APIs to pull back data from that person’s account that matches the Javascript variable. This is crucial for web servers worldwide to function and consist of accounts and user information. JavaScript's functionality and ability to work with APIs emphasize its significance in web development, completely changing how a typical website might perform.

## TypeScript 
TypeScript, released by Microsoft in October of 2012, is an extension of JavaScript, adding additional functionality and a more efficient structure. A distinctive feature of TypeScript is its ability to specify the data types it works with, allowing for better error detection during development, otherwise known as static typing, defining the types of data being passed within the code. For example, if there was a String being passed into a function that’s expecting a number, TypeScript will catch this error. Javascript will not. TypeScript can be compiled anywhere JavaScript runs. The TypeScript Compiler (TSC) converts TypeScript code into the same functioning JavaScript code. They are essentially the same language, the only difference is TypeScript makes it so the code is better structured and more efficient. Once the TypeScript code has been compiled, it is once again the same JavaScript, nothing different but the way it was constructed.

```ts
// TypeScript - Static Typing
function greet(name: string): string {
    return `Hello, ${name}!`;
}

let userName: string = "John";
console.log(greet(userName));

// The line below will output a compilation error due to the type mismatch
userName = 42;
```
```js
// JavaScript - Dynamic Typing
function greet(name) {
    return `Hello, ${name}!`;
}

let userName = "John";
console.log(greet(userName));

// No compilation error but the code will not work as intended, causing the developer to go back
userName = 42;
console.log(greet(userName));
```

## TSC
The TypeScript Compiler (TSC) follows several steps to convert TypeScript code into the original executable JavaScript. The 1st step involves parsing the code, meaning the compiler creates an abstract syntax tree (AST) model of the TypeScript source code. The type-checking phase begins, where the compiler examines the code to determine variable, function, and expression types. Any type errors, such as assigning a String value to a variable that’s expecting an integer, are flagged at this stage. After finding all errors, it generates the Javascript code and begins converting TypeScript-specific features into that of its predecessor. Newly converted code is then bundled to minimize the HTTP requests using tools like [Webpack](https://webpack.js.org/) or [Rollup](https://rollupjs.org/). That same code is now executed in a browser or server, functioning like any other JavaScript program. 

## Comparison
When you compare the two web page languages, TypeScript proves to be more beneficial. While both languages perform the same tasks, TypeScript offers an advantage in terms of ease of writing and structuring code in a more error-free way. Developers can work at a faster pace, knowing that TypeScript's static typing helps catch some of these potential errors early on in the development process. TypeScript's ability to convert its code back to the original language allows for compatibility with existing JavaScript environments with no changes to be made.

JavaScript has always served as a versatile scripting language for web development, while TypeScript has now extended its capabilities by introducing static typing and enhanced syntax. The choice between the two depends on the project requirements and the developer's preference for how they go about their production. Ultimately, both languages contribute significantly to the always-evolving web development world with much to offer now and in the future.
