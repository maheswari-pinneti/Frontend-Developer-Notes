# 📘 Frontend & HR Interview Questions and Answers

---

## 🖥️ HTML, CSS, JavaScript

### 1. What is the difference between HTML, CSS, and JavaScript?
- **HTML** (Structure): Defines the content and layout (e.g., headings, paragraphs, forms).
- **CSS** (Style): Controls the appearance (e.g., colors, layout, spacing).
- **JavaScript** (Behavior): Adds interactivity (e.g., dynamic content, form validation).

### 2. What are the different types of CSS selectors?
- **Element Selector**: `p`, `h1`
- **ID Selector**: `#id`
- **Class Selector**: `.class`
- **Attribute Selector**: `[type="text"]`
- **Pseudo-class**: `:hover`, `:nth-child()`
- **Pseudo-element**: `::before`, `::after`

### 3. Explain the CSS Box Model.
- The box model includes: `Content` → `Padding` → `Border` → `Margin`

### 4. What is the difference between `==` and `===` in JavaScript?
- `==` checks value with type coercion.
- `===` checks both value and type strictly.

### 5. What are JavaScript closures, and why are they important?
- A closure is a function with access to its outer scope, even after the outer function has returned.
- Used for data privacy and function factories.

### 6. What is the DOM (Document Object Model)?
- A tree-like structure representing the webpage elements. JavaScript can access and modify it.

### 7. What are the different ways to declare variables in JavaScript?
- `var`, `let`, `const`

### 8. What is the difference between `null` and `undefined` in JavaScript?
- `null`: Intentional absence of value
- `undefined`: Variable declared but not assigned a value

### 9. Explain how `this` works in JavaScript.
- Depends on context (global, object, function, arrow function)
- In arrow functions, `this` is lexically bound.

### 10. What is event delegation in JavaScript?
- A technique to handle events at a parent level using event bubbling.

### 11. What is the difference between `localStorage`, `sessionStorage`, and `cookies`?
- `localStorage`: Permanent until cleared
- `sessionStorage`: Clears after tab is closed
- `cookies`: Sent to server with each request, smaller storage

### 12. What is the purpose of the `z-index` in CSS?
- Controls stack order of overlapping elements.

### 13. What are CSS Flexbox and Grid?
- **Flexbox**: One-dimensional layout system (row/column)
- **Grid**: Two-dimensional layout system (rows + columns)

### 14. What is the purpose of `async` and `await` in JavaScript?
- Syntax sugar for Promises. Makes asynchronous code more readable.

### 15. What is the Virtual DOM and how does it work?
- A lightweight copy of the real DOM. React uses it to update only what’s changed.

---

## ⚛️ React

### 16. What is the purpose of props and state in React?
- **Props**: Read-only data passed from parent to child.
- **State**: Local, mutable component data.

### 17. What are React Hooks?
- Functions like `useState`, `useEffect`, `useContext` to use state and lifecycle features in functional components.

### 18. What is a JavaScript Promise?
- An object representing the eventual completion or failure of an asynchronous operation.

### 19. What is JSX in React?
- A syntax extension that allows writing HTML in JavaScript.

---

## 🧠 Web Concepts

### 20. How does the browser render a webpage?
1. Parse HTML → Construct DOM  
2. Parse CSS → Create CSSOM  
3. Combine into render tree → Layout → Paint → Composite

### 21. What are event listeners in JavaScript?
- Functions that wait for and respond to user interaction (e.g., `click`, `keydown`).

### 22. What is the difference between a class and an ID in HTML?
- **ID**: Unique per page (`#id`)
- **Class**: Reusable (`.class`)

### 23. What are JavaScript callback functions?
- Functions passed as arguments and executed later.

### 24. How do you make a website mobile-responsive?
- Use media queries, flexible layouts, relative units (`em`, `%`, `vw`), and responsive frameworks.

### 25. What are the main principles of responsive web design?
- Fluid grids, flexible images, media queries

### 26. What is the `transition` property in CSS?
- Animates property changes over time (e.g., `transition: all 0.3s ease`).

### 27. How does `localStorage` work in HTML5?
- Stores key-value pairs with no expiration date. Accessible via `localStorage.getItem()` etc.

### 28. What is the `fetch()` method in JavaScript?
- Used for making HTTP requests. Returns a Promise.

### 29. What is the difference between `position: absolute` and `relative`?
- `absolute`: Positioned relative to nearest non-static ancestor
- `relative`: Positioned relative to its normal position

### 30. What are Web Workers?
- JavaScript threads that run in the background, allowing parallel processing.

### 31. What is Cross-Origin Resource Sharing (CORS)?
- A security feature that restricts cross-origin HTTP requests from scripts.

### 32. What are the advantages of using Sass over plain CSS?
- Nesting, variables, mixins, inheritance, modularity

### 33. How can you optimize the performance of a frontend web application?
- Code splitting, lazy loading, image compression, CDN usage, minimizing re-renders

### 34. What is a Content Delivery Network (CDN)?
- A network of servers that deliver content from the closest node to the user, improving speed.

### 35. What is `setTimeout()` in JavaScript?
- Executes a function after a specified delay.

### 36. What is the purpose of Webpack in frontend development?
- Bundles JS/CSS/assets into optimized files, supports loaders/plugins.

### 37. What are CSS preprocessors, and how do they work?
- Tools like Sass or LESS that compile into standard CSS, offering variables, nesting, etc.

### 38. What is a Single Page Application (SPA)?
- A web app that loads a single HTML page and dynamically updates content via JavaScript.

### 39. What is the difference between `class` and `classList` in JavaScript?
- `class`: Gets/sets the entire class string.
- `classList`: Provides methods to add, remove, toggle individual classes.

### 40. What is `box-sizing` in CSS?
- Controls how the total width/height is calculated (`content-box` vs `border-box`).

---

## 💬 HR Questions

### 41. Tell me about yourself
> I'm Maheswari Pinneti, a frontend-focused web developer and CSE final-year student, passionate about building responsive and AI-powered web apps using React, Flask, and Python.

### 42. Why should we hire you?
> I bring strong technical skills, real-world project experience, and a fast learning mindset that aligns with your company’s mission.

### 43. What's your greatest strength?
> Problem-solving, UI design sensitivity, and adaptability.

### 44. What's your greatest weakness?
> Sometimes over-focus on small UI details; I'm working on balancing perfection and deadlines.

### 45. Describe a challenging situation and how you handled it.
> In my AI project, I faced model deployment issues. I debugged, consulted forums, and successfully deployed on Heroku, gaining backend deployment skills.

### 46. Where do you see yourself in five years?
> As a full-stack developer contributing to impactful products, possibly leading a small frontend team.

### 47. Tell me about a time you failed and what you learned from it.
> I initially ignored cross-browser compatibility, which broke my layout. Learned to test thoroughly and use standard CSS.

### 48. How do you handle stress or pressure?
> I break tasks into chunks, prioritize, and take short breaks to reset.

### 49. Describe a situation with a difficult coworker.
> During a group project, one member missed deadlines. I communicated clearly, re-distributed work, and we completed it on time.

### 50. What's your leadership style?
> Collaborative and supportive, I listen, delegate, and encourage initiative.

### 51. How do you stay updated with industry trends?
> I follow dev communities, newsletters like Frontend Focus, and build projects with trending tools.

### 52. What do you know about GammaStack?
> A global IT solutions company delivering web & mobile products across iGaming, healthcare, finance, and enterprise software with innovation at its core.

### 53. Why do you want to work here?
> The live project exposure, mentorship culture, and growth opportunities align with my goals as a developer.

### 54. A time you adapted to a change at work.
> Transitioned from JS to React in a project. I quickly learned JSX and hooks via docs/tutorials.

### 55. What motivates you?
> Learning new things and building user-focused apps that solve real problems.

### 56. Preferred work style: independently or in a team?
> I enjoy both, but thrive best in collaborative teams where I can learn and contribute.

### 57. How do you handle constructive criticism?
> I take it positively, ask for specifics, and use it to improve myself.

### 58. How do you handle ambiguity and uncertainty?
> I clarify requirements, ask questions, and make incremental progress with feedback.

### 59. What unique qualities would you bring to this role?
> A combination of strong frontend skills, a deep interest in AI integration, and a willingness to grow rapidly.

### 60. How do you manage multiple projects?
> I use Trello, set deadlines, break tasks, and maintain a consistent schedule.

### 61. A time you exceeded expectations
> Delivered a React-Flask AI app with a polished UI and model explainability feature ahead of schedule.

### 62. How do you deal with conflict at work?
> Listen actively, understand perspectives, and aim for a win-win resolution.

### 63. Most significant professional achievement?
> Building a medical imaging classifier from scratch and deploying it as a usable web tool.

### 64. Describe a time you handled a difficult client.
> During freelance UI work, a client kept changing requirements. I created a shared scope doc and reviewed deliverables weekly.

---
