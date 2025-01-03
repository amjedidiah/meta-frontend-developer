# Notes

## Coercion

```js
1 + "2" = 12
```

JavaScript **_coerces_** the number 1 to a string before it then concatenates it with "2"

## Operator precedence and associativity

### Operator precedence(BODMAS)

A set of rules that determines which operator should be evaluated first.

### Operator associativity

Determines how the precedence works when the code uses operators with the same precedence.
There are two kinds:

- left-to-right associativity
- right-to-left associativity

For example, the assignment operator is right-to-left associative, while the greater than operator is left-to-right associative:

```js
var num = 10; // the value on the right is assigned to the variable name on the left
5 > 4 > 3; // the 5 > 4 is evaluated first (to `true`), then true > 3 is evaluated to `false`, because the `true` value is coerced to `1`
```

## ECMA

- JavaScript was built in only 10 days in 1995 by a single person, Brendan Eich
- ECMA (European Computer Manufacturers Association)

In 1996 Netscape made a deal with the organization known as ECMA (European Computer Manufacturers Association) to draft the specification of the JavaScript language, and in 1997 the first edition of the ECMAScript specification was published.

ECMA publishes this specification as the ECMA-262 standard.

- There have been 12 ECMA-262 updates - the first one was in 1997.

- JavaScript as a language is not a completely separate, stand-alone entity. It only exists as an implementation. This implementation is known as a JavaScript engine.

## Falsy Values

The only object value that is falsy is `document.all`

```js
Boolean(document.all) // false
```

## Defensive Programming

Defensive programming is all about assuming that all the arguments a function will receive are of the wrong type, the wrong value or both.
It then becomes important to verify the type and values of the parameters before using them in the function

## Difference b/w Functional and Object-oriented programming

| OOP | FP |
| --- | --- |
| The data(properties) and functions(methods) that work on that data are combined inside objects. | The data and functions that work on that data are separated |
| Methods update properties stored in the object instead of generating new return values. | Functions return new values and then use those values somewhere else in the code. |

> OOP helps us model real-life objects. It works best when the grouping of properties and data in an object makes logical sense - meaning, the properties and methods "belong together".

## Functional Programming Concepts

### First-class functions

Functions in JavaScript are “first-class citizens”, meaning a function in JavaScript is just another value that we can:

- pass to other functions
- save in a variable
- return from other functions

### Higher-order functions

A higher-order function is a function that has either one or both of the following characteristics:

- It accepts other functions as arguments
- It returns functions when invoked

### Pure functions and side-effects

A pure function:

- returns the exact same result as long as it's given the same values.
- does not contain a side-effect

> A side-effect is any instance where a function makes a change outside of itself or relies on external variables, calls a Browser API (even the console itself!), calls `Math.random()` - since the value cannot be reliably repeated

## Difference b/w `var`, `let` and `const`

### `var`

- Can be used before declaration

    ```js
    console.log(name); // undefined
    var name = "Jedidiah"
    console.log(name) // "Jedidiah"

- Can be re-declared multiple times

    ```js
    var name = "Nwachukwu"
    var name = "Jedidiah"
    var name = "Jerushah"
    console.log(name) // "Jerushah"
    ```

- Can be declared without initialization

    ```js
    var name
    console.log(name) // "undefined"
    ```

- Can be re-assigned multiple times

    ```js
    var name = "Nwachukwu"
    name = "Jedidiah"
    name = "Jerushah"
    console.log(name) // "Jerushah"
    ```

### `let` & `const`

- Cannot be used before declaration.

    ```js
    console.log(name); // ReferenceError: name is not defined
    let name = "Jedidiah"
    console.log(name) // "Won't run"
    ```

    ```js
    console.log(age); // ReferenceError: age is not defined
    const age = 28
    console.log(age) // "Won't run"
    ```

- Cannot be re-declared multiple times

    ```js
    let name = "Nwachukwu"
    let name = "Jedidiah" // SyntaxError: Identifier 'name' has already been declared
    let name = "Jerushah"
    console.log(name) // "Won't run"
    ```

    ```js
    const age = 31
    const age = 28 // SyntaxError: Identifier 'age' has already been declared
    const age = 26
    console.log(age) // "Won't run"
    ```

- Only `let` can be declared without initialization

    ```js
    let name
    console.log(name) // "undefined"

    const age
    console.log(age) // SyntaxError: Missing initializer in const declaration
    ```

- Only `let` can be re-assigned multiple times

    ```js
    let name = "Nwachukwu"
    name = "Jedidiah"
    name = "Jerushah"
    console.log(name) // "Jerushah"

    const age = 31
    age = 28 // TypeError: Assignment to constant variable.
    age = 26
    console.log(age) // "Won't run"
    ```

## OOP Principles

OOP allows for modular, reusable and more flexible code
The four fundamental OOP principles are inheritance, encapsulation, abstraction and polymorphism

### Inheritance

```js
class Animal {}
class Bird extends Animal {}
class Eagle extends Bird {}
```

### Encapsulation

In the simplest terms, encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.
It is about not having access to, or not being concerned with, how some implementation works internally.

```js
new Eagle().fly()
```

### Abstraction

Abstraction is all about writing code in a way that will make it more generalized.
It is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept.

### Polymorphism

> Same function/method producing different results, based on the context in which it is used.

Polymorphism is useful because it allows developers to build objects that can have the exact same functionality, namely, functions with the exact same name, which behave exactly the same.
However, at the same time, you can override some parts of the shared functionality or even the complete functionality, in some other parts of the OOP structure.

```js
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
```

## Object and its Prototype

```js
const person = {
    name: "John Doe",
    age: 22,
}

const person1 = Object.create(person);
person1.email = "john.doe@yopmail.com"
console.log(person1) // {email: "john.doe@yopmail.com"}


for(let prop in person1) {
    console.log(`${prop}: `, person1[prop]) // {age: 22, email: "john.doe@yopmail.com", name: "John Doe"}
}

for(let prop of Object.keys(person1)) {
    console.log(`${prop}: `, person1[prop]) // {email: "john.doe@yopmail.com"}
}
```

## Data Types

| Object Literal | Map |
| --- | --- |
|Not iterable| Iterable|
|Keys can only be strings or symbols| Keys can be any data type|
|Has prototypes| No prototypes|

## ServerJS / CommonJS

- Modules were added to ECMAScript ES6 specification
- Started by Mozilla engineer Kevin Dangoor in January, 2009
- Designed to specify how JS modules should work outside a browser environment, e.g: Node.js

```html
<!-- This HTML, and accompanying JS file must be run from a server to prevent CORS issues -->
<!DOCTYPE>
<html>
  <head></head>
  <body>
    <h1>Hello</h1>

    <script type="module">
      import animal, {greeting} from "./animal.js";
      console.log(greeting, animal);
    </script>
  </body>
</html>

```

## Refactoring

Updating code without affecting the results it produces, either to improve efficiency or readability

## Testing

### Testing Types

#### e2e testing: Cypress, Protractor, WebdriverJS

- Test like an end-user will in real-life.
- Slowest.
- Takes the most time to setup and run.

#### Integration testing: RTL, Enzyme

- Tests how separate parts of an application works together

#### Unit test

- Tests smallest units(functions) of code in isolation

### Mocking

- Separating code from related dependencies during testing

### Snapshot Testing

- Used by web developers to verify that there are no regressions in the DOM after some changes to the codebase are made

### Test-Driven Development(TDD): Red - Green - Refactor

A streamlined process of writing code that will satisfy some requirements
![TDD vs Traditional Development](https://i.ibb.co/2c8X8qz/Screenshot-2025-01-03-at-14-17-17.png)

TDD:

- minimizes regression
- allows for implementations to be tested using various inputs

### Stress Testing

- Testing the behaviour of the app under extreme conditions

### Code Coverage

- Let's you know where more testing may be required

## Hoisting

Hoisting will make the first code block run lie the second code block
Such that the console.log will return 5 instead of undefined.

```js
var help;
console.log(help);
help = 5;
```

```js
var help;
help = 5;
console.log(help);
```
