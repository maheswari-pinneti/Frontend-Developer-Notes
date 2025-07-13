Here is your **JavaScript Roadmap from Beginner to Advanced** formatted entirely in **GitHub-Flavored Markdown** based on both your request and the content from the uploaded `javascript.pdf`.

---

````markdown
# 🛣️ JavaScript Mastery Roadmap (Beginner to Advanced)

Your complete guide to learning JavaScript—from variables and functions to advanced browser events and APIs.

---

## 📘 Table of Contents

- [Variables & Data Types](#variables--data-types)
- [Operators](#operators)
- [Functions](#functions)
- [Conditional Statements](#conditional-statements)
- [Truthy/Falsy Values](#truthyfalsy-values)
- [String Methods](#string-methods)
- [Array Methods](#array-methods)
- [Looping](#looping)
- [Math & Date Methods](#math--date-methods)
- [Window Object](#window-object)
- [DOM Events](#dom-events)

---

## 📌 Variables & Data Types

```js
var name = "Maheswari"; // function-scoped, reassignable
let age = 25; // block-scoped, reassignable
const city = "Guntur"; // block-scoped, NOT reassignable
```
````

### Primitive Types

- Number, String, Boolean
- Null, Undefined, Symbol

### Non-Primitive Types

- Object, Array, RegExp

---

## ➕ Operators

### Arithmetic

`+`, `-`, `*`, `/`, `%`, `++`, `--`

### Comparison

`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`

### Logical

`&&`, `||`, `!`

### Bitwise

`&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`

---

## 🔧 Functions

```js
// Regular
function greet(name) {
  return "Hello " + name;
}

// Expression
let greet = function (name) {
  return "Hi " + name;
};

// Arrow
const greet = (name) => "Hey " + name;
```

---

## 🔁 Conditional Statements

```js
if (a > b) {
  // do something
} else if (a == b) {
  // do something else
} else {
  // fallback
}
```

```js
// Switch
switch (fruit) {
  case "apple":
    break;
  case "banana":
    break;
  default:
    break;
}

// Ternary
let status = age > 18 ? "Adult" : "Minor";
```

---

## 🧠 Truthy/Falsy Values

### Falsy:

- `false`, `0`, `""`, `null`, `undefined`, `NaN`

### Truthy:

- Anything not falsy (e.g. `[]`, `{}`, `"text"`)

---

## ✂️ String Methods

```js
"hello".length; // 5
"hello".toUpperCase(); // "HELLO"
"hello world".includes("wo"); // true
"hello".slice(1, 3); // "el"
```

---

## 🧺 Array Methods

```js
let arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
arr.pop(); // [1, 2, 3]
arr.map((x) => x * 2); // [2, 4, 6]
arr.filter((x) => x > 1); // [2, 3]
```

Other: `forEach`, `reduce`, `splice`, `slice`, `sort`, `reverse`, `includes`, `find`, `indexOf`, `join`, `concat`

---

## 🔄 Looping

```js
for (let i = 0; i < 5; i++) {}

while (condition) {}

do {} while (condition);

for (let item of array) {
}

for (let key in object) {
}
```

---

## 🔢 Math & Date Methods

### Math

```js
Math.abs(-10); // 10
Math.floor(2.7); // 2
Math.ceil(2.3); // 3
Math.random(); // 0-1
Math.max(1, 5, 9); // 9
```

### Date

```js
let d = new Date();
d.getFullYear();
d.getMonth(); // 0-11
d.getTime(); // ms since Jan 1, 1970
```

---

## 🌐 Window Object

### Methods

- `alert()`, `prompt()`, `confirm()`
- `setTimeout()`, `setInterval()`
- `open()`, `close()`
- `scrollTo(x, y)`

### Properties

- `window.innerHeight`, `window.innerWidth`
- `window.localStorage`, `window.sessionStorage`
- `window.location`, `window.history`

---

## 🧩 DOM Events

### Input Events

- `onblur`, `onchange`, `onfocus`, `onsubmit`

### Mouse Events

- `onclick`, `ondblclick`, `onmouseenter`, `onmouseleave`

### Keyboard Events

- `onkeydown`, `onkeypress`, `onkeyup`

### Advanced Events

- `drag`, `drop`, `copy`, `paste`, `load`, `unload`, `scroll`, `resize`

---

## 🏁 Final Tip

> **Build Real Projects**:
>
> - To-Do App
> - Quiz App
> - Weather App (API)
> - Portfolio Website
> - AI Chatbot UI

---

## 📚 Learn More

| Resource        | Link                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------ |
| MDN Docs        | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| JavaScript.info | [https://javascript.info](https://javascript.info)                                                                 |
| DevDocs         | [https://devdocs.io](https://devdocs.io)                                                                           |

---

## 🎓 Want a Certificate?

If you're serious about mastering JS, consider completing a structured course with:

- HD videos
- Lifetime access
- Real-world projects
- Certificate of completion

Happy Coding! 🚀

---

```

---

Would you like me to:
- 📂 Package this as a `.md` file for your GitHub repo?
- 📘 Turn it into a Notion workspace?
- 💼 Help you set up a GitHub Pages site for it?

Let me know!
```
