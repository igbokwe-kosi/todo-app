# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Links

- Live Site URL: [The app](https://kosiso-todo-app.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Desktop-first workflow
- JavaScript

### What I learned

I learnt how to work with toggling dark and light mode

To see how you can add code snippets, see below:

```js
let themeMode = `${
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark-mode'
    : 'light-mode'
}`;
```

### Continued development

I plan on adding the way to reorder the task in the todo list later on.

### Useful resources

- [CSS Tricks](https://css-tricks.com/dark-modes-with-css/) - That's where I understand how to implement Dark Mode.
- [Stack Overflow](https://stackoverflow.com/) - Helped answer with some of my problems

## Author

- Website - [Add your name here](https://kosiso.netlify.app)
- Frontend Mentor - [@igbokwe-kosi](https://www.frontendmentor.io/profile/igbokwe-kosi)
- Twitter - [@igbokwe_kosiso](https://www.twitter.com/igbokwe_kosiso)
