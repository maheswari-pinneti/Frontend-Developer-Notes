# 📚 Frontend Developer Notes

---

**A curated vault for mastering Frontend Development — HTML, CSS, JavaScript, React, Tailwind, and Bootstrap.** This repo supports learning, building, and deploying with confidence.

---

## ✨ What's Inside

✅ Semantic HTML5 elements & accessibility
✅ CSS (Flexbox, Grid, Animations, Media Queries)
✅ JavaScript (ES6+, DOM, Async/Await, Fetch API)
✅ Frameworks: React.js, Tailwind CSS, Bootstrap
✅ Setup & run instructions
✅ Troubleshooting & dev tool insights
✅ Ready-to-execute code snippets

---

## 🏗️ Installation & Setup

### ✅ Prerequisites

* 💻 [VS Code](https://code.visualstudio.com/)
* 🌐 Chrome / Firefox with DevTools
* 🧱 [Node.js + npm](https://nodejs.org/) (for React and Tailwind)
* 🧰 Git (optional, for version control)

---

## ⚙️ How to Run and Execute

### 🖼️ HTML / CSS / JS

```bash
cd html-css-js
# Open `index.html` in your browser OR
live-server index.html
```

> Tip: Use [Live Server VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

---

### ⚛️ React.js (Using Vite)

```bash
# From root folder
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

> Now open [http://localhost:5173](http://localhost:5173)

📄 *Folder already included in `frameworks/react-basics.md`*

---

### 💨 Tailwind CSS (With React)

```bash
cd my-react-app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**tailwind.config.js**

```js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
```

**src/index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then run:

```bash
npm run dev
```

> Tailwind styles now work with your React components

---

### 🅱️ Bootstrap (With or Without React)

#### HTML:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

#### React:

```bash
npm install bootstrap
```

In `main.jsx` or `App.jsx`:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

## 🧩 Directory Structure

```
📦 frontend-developer-notes
├── 📁 html
│   ├── semantic-elements.md
│   └── forms-accessibility.md
├── 📁 css
│   ├── flexbox.md
│   ├── grid.md
│   ├── responsive-design.md
│   └── animations-transitions.md
├── 📁 javascript
│   ├── es6-syntax.md
│   ├── dom-events.md
│   ├── promises-async.md
│   └── fetch-api.md
├── 📁 frameworks
│   ├── react-basics.md
│   ├── tailwind-guide.md
│   └── bootstrap-essentials.md
└── README.md
```

---

## 🐞 Debugging & DevTools

| ❌ Issue               | ✅ Reason                  | 🛠️ Fix                                              |
| --------------------- | ------------------------- | ---------------------------------------------------- |
| JS not running        | Script not loaded or typo | Use `console.log` & browser devtools                 |
| Tailwind not applying | Wrong config path         | Ensure `tailwind.config.js` includes correct folders |
| React not compiling   | Vite or module error      | Check terminal errors + refresh browser              |

---

## 🌍 Live Preview & Deployment

* HTML/CSS/JS: GitHub Pages or Netlify
* React (Vite): Netlify, Vercel, or Surge

  ```bash
  npm run build
  ```

---

## 🤝 Contribution

Pull Requests are welcome to expand notes, fix bugs, or add framework examples like Vue, Svelte, or Angular.

---

## 📌 License

MIT — Use freely with proper attribution.

---

**Made with 💙 by Maheswari Pinneti**
✨ Star it, fork it, and level up your frontend journey!

