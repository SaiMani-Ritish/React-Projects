# PE03 - Todo List App

## Input
- The user can input a task description in the input field.
- By clicking the "Add Task" button we can add the task to the list.
- The user can click the "Delete" button next to a task to remove a task from the list.

## Process
- The app is using React's `useState` hook to manage the state of the todos and the input value.
- When the "Add Task" button is clicked, then the input value is added to the `todos` array.
- When the "Delete" button is clicked, the task is removed from the `todos` array.
- The `.map()` function dynamically renders the list of todos.

## Output
- The app displays the list of tasks that are added.
- Each task has a "Delete" button that can removes it from the list.
