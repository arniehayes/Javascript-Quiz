export const questionArray = {
  react: [{}],
  javaScript: [
    {
      question: `
      What's the output?

      function sayHi() {
        console.log(name);
        console.log(age);
        var name = 'Lydia';
        let age = 21;
      }

      sayHi();
      `,
      answers: [
        "Lydia and undefined",
        "Lydia and Reference Error",
        "Reference Error and 21",
        "undefined and Reference Error",
      ],
      correctAnswer: 3,
      reason:
        "Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted(memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable.We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined. Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized.They are not accessible before the line we declare(initialize) them.This is called the temporal dead zone.When we try to access the variables before they are declared, JavaScript throws a ReferenceError.",
    },
    {
      question: `
      What's the output?

      for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
      }

      for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
      }
      `,
      answers: ["0 1 2 and 0 1 2", "0 1 2 and 3 3 3", "3 3 3 and 0 1 2"],
      correctAnswer: 2,
      reason:
        "Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.",
    },
    {
      question: `
      What's the output?

      const shape = {
        radius: 10,
        diameter() {
          return this.radius * 2;
        },
        perimeter: () => 2 * Math.PI * this.radius,
      };

      console.log(shape.diameter());
      console.log(shape.perimeter());
      `,
      answers: [
        "20 and 62.83185307179586",
        "20 and NaN",
        "20 and 63",
        "NaN and 63",
      ],
      correctAnswer: 1,
      reason:
        "Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function. With arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example).There is no value radius on that object, which returns NaN.",
    },
    {
      question: `
      What's the output?

      +true;
      'Lydia';
      `,
      answers: ["1 and false", "false and NaN", "false and false", "1 and 1"],
      correctAnswer: 0,
      reason:
        "The unary plus tries to convert an operand to a number. true is 1, and false is 0. The string 'Lydia' is a truthy value. What we're actually asking, is is this truthy value falsy?. This returns false.",
    },
    {
      question: `
      Which one is true?
      
      const bird = {
        size: 'small',
      };

      const mouse = {
        name: 'Mickey',
        small: true,
      };
      `,
      answers: [
        "mouse.bird.size is not valid",
        "mouse[bird.size] is not valid",
        "mouse[bird[size]] is not valid",
        "All of them are valid",
      ],
      correctAnswer: 0,
      reason:
        "In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood. JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket [ and keeps going until it finds the closing bracket ]. Only then, it will evaluate the statement. mouse[bird.size]: First it evaluates bird.size, which is small. mouse[small] returns true However, with dot notation, this doesn't happen. mouse does not have a key called bird, which means that mouse.bird is undefined. Then, we ask for the size using dot notation: mouse.bird.size. Since mouse.bird is undefined, we're actually asking undefined.size. This isn't valid, and will throw an error similar to Cannot read property size of undefined.",
    },
    {
      question: `
      What's the output?

      let c = { greeting: 'Hey!' };
      let d;

      d = c;
      c.greeting = 'Hello';
      console.log(d.greeting);
      `,
      answers: ["Hello", "Hey!", "undefined", "Reference Error or Type Error"],
      correctAnswer: 0,
      reason:
        "In JavaScript, all objects interact by reference when setting them equal to each other. First, variable c holds a value to an object. Later, we assign d with the same reference that c has to the object. When you change one object, you change all of them.",
    },
    {
      question: `
      What's the output?

      let a = 3;
      let b = new Number(3);
      let c = 3;

      console.log(a == b);
      console.log(a === b);
      console.log(b === c);
      `,
      answers: [
        "true false true",
        "false false true",
        "true false false",
        "false true true",
      ],
      correctAnswer: 2,
      reason:
        "new Number() is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object. When we use the == operator, it only checks whether it has the same value. They both have the value of 3, so it returns true. However, when we use the === operator, both value and type should be the same. It's not: new Number() is not a number, it's an object. Both return false.",
    },
    {
      question: `
      What's the output?

      class Chameleon {
        static colorChange(newColor) {
          this.newColor = newColor;
          return this.newColor;
        }

        constructor({ newColor = 'green' } = {}) {
          this.newColor = newColor;
        }
      }

      const freddie = new Chameleon({ newColor: 'purple' });
      console.log(freddie.colorChange('orange'));
      `,
      answers: ["orange", "purple", "green", "TypeError"],
      correctAnswer: 3,
      reason:
        "The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since freddie is an instance of class Chameleon, the function cannot be called upon it. A TypeError is thrown.",
    },
    {
      question: `
      What's the output?

      let greeting;
      greetign = {}; // Typo!
      console.log(greetign);
      `,
      answers: ["{}", "ReferenceError: greetign is not defined", "undefined"],
      correctAnswer: 0,
      reason:
        "It logs the object, because we just created an empty object on the global object! When we mistyped greeting as greetign, the JS interpreter actually saw this as global.greetign = {} (or window.greetign = {} in a browser). In order to avoid this, we can use use strict. This makes sure that you have declared a variable before setting it equal to anything.",
    },
    {
      question: `
      What happens when we do this?

      function bark() {
        console.log('Woof!');
      }

      bark.animal = 'dog';
      `,
      answers: [
        "Nothing, this is totally fine!",
        "SyntaxError. You cannot add properties to a function this way.",
        "Woof gets logged.",
        "ReferenceError",
      ],
      correctAnswer: 0,
      reason:
        "This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects) A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.",
    },
    {
      question: `
      What's the output?

      function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
      }

      const member = new Person('Lydia', 'Hallie');
      Person.getFullName = function() {
        return {this.firstName} {this.lastName};
      };

      console.log(member.getFullName());
      `,
      answers: [
        "TypeError",
        "SyntaxError",
        "Lydia Hallie",
        "undefined undefined",
      ],
      correctAnswer: 0,
      reason:
        "In JavaScript, functions are objects, and therefore, the method getFullName gets added to the constructor function object itself. For that reason, we can call Person.getFullName(), but member.getFullName throws a TypeError.",
    },
    {
      question: `
      What's the output?

      function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
      }

      const lydia = new Person('Lydia', 'Hallie');
      const sarah = Person('Sarah', 'Smith');

      console.log(lydia);
      console.log(sarah);
      `,
      answers: [
        `Person {firstName: "Lydia", lastName: "Hallie"} and undefined`,
        `Person {firstName: "Lydia", lastName: "Hallie"} and Person {firstName: "Sarah", lastName: "Smith"}`,
        `Person {firstName: "Lydia", lastName: "Hallie"} and {}`,
        `Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError`,
      ],
      correctAnswer: 0,
      reason: `For sarah, we didn't use the new keyword. When using new, this refers to the new empty object we create. However, if you don't add new, this refers to the global object! We said that this.firstName equals "Sarah" and this.lastName equals "Smith". What we actually did, is defining global.firstName = 'Sarah' and global.lastName = 'Smith'. sarah itself is left undefined, since we don't return a value from the Person function`,
    },
    {
      question: `
      What are the three phases of event propagation?
      `,
      answers: [
        "Target > Capturing > Bubbling",
        "Bubbling > Target > Capturing",
        "Target > Bubbling > Capturing",
        "Capturing > Target > Bubbling",
      ],
      correctAnswer: 3,
      reason:
        "During the capturing phase, the event goes through the ancestor elements down to the target element. It then reaches the target element, and bubbling begins.",
    },
    {
      question: `
      All object have prototypes.
      `,
      answers: ["true", "false"],
      correctAnswer: 1,
      reason:
        "All objects have prototypes, except for the base object. The base object is the object created by the user, or an object that is created using the new keyword. The base object has access to some methods and properties, such as .toString. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.",
    },
    {
      question: `
      What's the output?

      function sum(a, b) {
        return a + b;
      }

      sum(1, '2');
      `,
      answers: ["NaN", "TypeError", `"12"`, "3"],
      correctAnswer: 2,
      reason: `JavaScript is a dynamically typed language: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called implicit type coercion. Coercion is converting from one type into another. In this example, JavaScript converts the number 1 into a string, in order for the function to make sense and return a value. During the addition of a numeric type (1) and a string type ('2'), the number is treated as a string. We can concatenate strings like "Hello" + "World", so what's happening here is "1" + "2" which returns "12".`,
    },
    {
      question: `
      What's the output?

      let number = 0;
      console.log(number++);
      console.log(++number);
      console.log(number);
      `,
      answers: ["1 1 2", "1 2 2", "0 2 2", "0 1 2"],
      correctAnswer: 2,
      reason: `
      "The postfix unary operator ++:
        1. Returns the value (this returns 0)
        2. Increments the value (number is now 1)
      The prefix unary operator ++:

        1. Increments the value (number is now 2)
        2. Returns the value (this returns 2)
      This returns 0 2 2."`,
    },
    {
      question: `
      What's the output?

      function getPersonInfo(one, two, three) {
        console.log(one);
        console.log(two);
        console.log(three);
      }

      const person = 'Lydia';
      const age = 21;

      getPersonInfo {person} is {age} years old;`,
      answers: [
        `"Lydia" 21 ["", " is ", " years old"]`,
        `["", " is ", " years old"] "Lydia" 21`,
        `"Lydia" ["", " is ", " years old"] 21`,
      ],
      correctAnswer: 1,
      reason:
        "If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!",
    },
    {
      question: `
      What's the output?

      function checkAge(data) {
        if (data === { age: 18 }) {
          console.log('You are an adult!');
        } else if (data == { age: 18 }) {
          console.log('You are still an adult.');
        } else {
          console.log(Hmm.. You don't have an age I guess);
        }
      }

      checkAge({ age: 18 });
      `,
      answers: [
        "You are an adult!",
        "You are still an adult.",
        "Hmm.. You don't have an age I guess",
      ],
      correctAnswer: 2,
      reason:
        "When testing equality, primitives are compared by their value, while objects are compared by their reference. JavaScript checks if the objects have a reference to the same location in memory. The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality. This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false.",
    },
    {
      question: `
      What's the output?

      function getAge(...args) {
        console.log(typeof args);
      }

      getAge(21)
      `,
      answers: [`"number"`, `"array"`, `"object"`, `"NaN"`],
      correctAnswer: 2,
      reason: `The rest parameter (...args) lets us "collect" all remaining arguments into an array. An array is an object, so typeof args returns "object"`,
    },
    {
      question: `
      What's the output?

      function getAge() {
        'use strict';
        age = 21;
        console.log(age);
      }

      getAge();
      `,
      answers: ["21", "undefined", "ReferenceError", "TypeError"],
      correctAnswer: 2,
      reason: `With "use strict", you can make sure that you don't accidentally declare global variables. We never declared the variable age, and since we use "use strict", it will throw a reference error. If we didn't use "use strict", it would have worked, since the property age would have gotten added to the global object.`,
    },
  ],
};

export const randomQuestions = {};
