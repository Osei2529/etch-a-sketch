# Etch-a-Sketch

A browser sketchpad built as part of The Odin Project's JavaScript
Foundations course. Move your mouse over the grid to draw, and use the
button to start a new grid at any size.

## Live preview
https://osei2529.github.io/etch-a-sketch

## How to use it
1. Move the mouse over the squares to color them.
2. Each square gets a random color the first time you hover over it.
3. Every further hover darkens that square by 10%, and it turns fully
   black after ten passes.
4. Click the button and enter a number from 1 to 100 to start a new
   grid with that many squares per side. The grid always fills the
   same 960px space.

## What this demonstrates
- Creating elements with JavaScript in a loop instead of writing HTML
  by hand
- Laying out a grid with Flexbox and flex-wrap
- Handling mouse events with addEventListener
- Calculating square sizes so any grid size fills a fixed width
- Validating user input from prompt() (whole numbers, 1 to 100,
  Cancel handling)
- Giving each element its own state with variables declared inside a
  loop
- Random numbers with Math.random() and building rgb() colors
- Git workflow: incremental commits and deploying with GitHub Pages
