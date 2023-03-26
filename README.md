# Udemy - Understanding Typescript

I wrote this code and notes during the Understanding Typescript course from Udemy made by [Maximilian Schwarzmüller](https://www.udemy.com/course/understanding-typescript/)

# Typescript

Typescript is a JavaScript superset adding new features.

> TS -> compiled to -> JS

## Why use TypeScript

- Avoid unwanted behavior at runtime.
- Catch errors during development.

> Fail during development and not on runtime

---

### Example

This example uses two number inputs that always return a number, but we must check the input first to avoid problems.

```javascript
function add(n1, n2) {
	if (typeof n1 !== 'number' || typeof n2 !== 'number') {
		throw new Error('Incorrect input!');
	}
	return n1 + n2;
}
```

TypeScript forces us to be more explicit and clear about our intentions and double-check our code.

```typescript
function add(n1: number, n2: number) {
	return n1 + n2;
}
```

---

### TypeScript adds:

- Types
- Next-Gen JS features
- Meta-Programming features like decorators
- Rich configurations options
- Modern tooling that helps even in non-TypeScript projects

> VS code extensions: Path Intellisens, ESLint, TSLint, Prettier,

### Starting a Project

```properties
npm init
npm install --save-dev lite-server
```

Open `package.json` file and add a script named "start" with the value `lite-server`, like this:

```json
  "scripts": {
    "start": "lite-server"
  },
```

To run the project use the command:

```properties
npm start
```

The `lite-server` will update the page after the TS is compiled.

## TypeScript Types

```typescript
let number1: number;
number = 10;
```

We need to add typing only on uninitialized variables.

All type casing on TS is always lowercase.

- Number: 1, 53, -10
- String: 'Hi', "Hi", \`Hi\`
- Boolean: true, false (0 = falsy, 1 = truthy)

> A constant is different from a variable.

### Objects

This is how we create objects in JavaScript:

```javascript
{
	name: 'Diego';
}
```

Now, using TypeScript:

```typescript
const person = { name: string; } = { name: 'Diego' }
```

Add type assignments like this is not a good practice!

> Types and types assignments are not JavaScript

### Arrays

```typescript
hobbies: string[] = ['Sports', 'Cooking'];
```

An array could be flexible or strict.

- Array of Strings -> string[]
- Array of any type -> any[]

### Tuple

Tuple is an array with fixed length and types.

```typescript
role: [2, 'author'];
```

> Push works with tuples.

### Enum

```typescript
enum Role {
  ADMIN,    // index: 0
  READ_ONLY // index: 1
  AUTHOR    // index: 2
}
```

### Union types

Two different types of value

```typescript
number | string;
```

> We may need a runtime check to avoid errors when using union types.

### Literal types

```typescript
resultConversion: 'as-number' | 'as-test';
```

### Type aliases

```typescript
type name = number | string;
type name = 'as-number' | 'as-text';
```

---

# Configuration file for compilation

## Watch Mode for One File

```properties
tsc <filename> --watch or -w
```

## Creating a Project to Manage Multiple Files

```properties
tsc init
```

This command generates a `tsconfig.json` file where we can change the project configurations.

> Import file into each other is called "modules".

## Additional Options

```json
"exclude": ["**/*.dev.ts", "node_modules"],
"include": ["./src/*"]
```

- Exclude -> Remove all listed files and/or matches
- Include -> The opposite of exclude

### Compiler Options

- target: JS output version
- lib: API needed to interact with, for example: "DOM"
- sourceMap: Connects JS file to a TS file on DevTools
- outDir: Where to store the compiled files.
- downlevelIteration: If the loops don't work as expected
- noEmitOnError: When set to true does not generate a JS file if the code has an error
- strict: Use all strictOptions when set to true

> Add chrome debug extension to VS code.

# Classes and Interfaces

OOP stands for Object-Oriented Programming

> Use real-life entities in your code.

Objects -> The things you work with in code.

Classes -> Blueprints for an object.

Instances -> An object created with a class.

```typescript
class Department {
	name: string;

	constructor(n: string) {
		this.name - n;
	}
}
```

> The `this.` will refer to the thing that called it.

## Add a validation to a method of a class

By doing a validation on a method we avoid using this method with objects that are not `Department`, so they may not have the necessary properties. The parameter `this: Department` helps typescript catch unwanted behaviors.

```typescript
class Department {
  ...

  describe(this: Department) {
    ...
  }
}
```

## Private Properties and Methods

```typescript
class Department {
	name: string;
	private employees: string[] = [];

	constructor(n: string) {
		this.name - n;
	}
}
```

Accessing this property directly should not be allowed, that why it is private. This code will return and error:

```typescript
const accounting = new Department('Accounting');
accounting.employees[2] = 'Anna'; // Trying to modify a private property
```

## Shortcut for Avoid Double Initialization Code

```typescript
class Department {
  constructor(private name: string) {
    ...
  }
}
```

## Read-Only Property

The `readonly` property blocks this property from being changed.

```typescript
class Department {
  constructor(private readonly name: string) {
    ...
  }
}
```
