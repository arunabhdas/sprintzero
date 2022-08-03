# SprintZero
SprintZero is a project management tool

## Screenshots

![Screenshot1](https://raw.githubusercontent.com/arunabhdas/sprintzero/main/screenshots/screenshot_1.png)
![Screenshot2](https://raw.githubusercontent.com/arunabhdas/sprintzero/main/screenshots/screenshot_2.png)

## Steps

* Boostrap sprintzero as below
```
npm create svelte@latest sprintzero

```


```
==> npm create svelte@latest sprintzero
Need to install the following packages:
  create-svelte@latest
Ok to proceed? (y) y

create-svelte version 2.0.0-next.152

Welcome to SvelteKit!

This is beta software; expect bugs and missing features.

Problems? Open an issue on https://github.com/sveltejs/kit/issues if none exists already.

✔ Which Svelte app template? › Skeleton project
✔ Add type checking with TypeScript? › Yes, using JavaScript with JSDoc comments
✔ Add ESLint for code linting? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Playwright for browser testing? … No / Yes

Your project is ready!
✔ Type-checked JavaScript
  https://www.typescriptlang.org/tsconfig#checkJs
✔ ESLint
  https://github.com/sveltejs/eslint-plugin-svelte3
✔ Prettier
  https://prettier.io/docs/en/options.html
  https://github.com/sveltejs/prettier-plugin-svelte#options
✔ Playwright
  https://playwright.dev

Install community-maintained integrations:
  https://github.com/svelte-add/svelte-adders

Next steps:
  1: cd sprintzero
  2: npm install (or pnpm install, etc)
  3: git init && git add -A && git commit -m "Initial commit" (optional)
  4: npm run dev -- --open

To close the dev server, hit Ctrl-C

Stuck? Visit us at https://svelte.dev/chat
```


### SvelteKit Tailwind CSS 

https://tailwindcss.com/docs/guides/sveltekit

* Install Tailwind CSS
Using npm, install tailwindcss and its peer dependencies, as well as svelte-preprocess, and then run the following commands to generate both tailwind.config.cjs and postcss.config.cjs.

```
npm install -D tailwindcss postcss autoprefixer svelte-preprocess
npx tailwindcss init tailwind.config.cjs -p
```

* Enable use of PostCSS in <style> blocks
In your svelte.config.js file, import svelte-preprocess and configure it to process <style> blocks as PostCSS.

```
import preprocess from "svelte-preprocess";

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}
```

* Configure your template paths
Add the paths to all of your template files in your tailwind.config.cjs file.

```
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
};
```

* Add the Tailwind directives to your CSS
Create a ./src/app.css file and add the @tailwind directives for each of Tailwind’s layers.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


* Import the CSS file
Create a ./src/routes/__layout.svelte file and import the newly-created app.css file.

```
__layout.svelte

<script>
  import "../app.css";
</script>

<slot />
```s





