# PE03 - Todo List App

## Input
1. The user can input a task description in the input field.
2. By clicking the "Add Task" button we can add the task to the list.
3. The user can click the "Delete" button next to a task to remove a task from the list.

## Process
1. The app uses React's `useState` hook to manage the state of the todos and the input value.
2. When the "Add Task" button is clicked, then the input value is added to the `todos` array.
3. When the "Delete" button is clicked, the task is removed from the `todos` array.
4. The `.map()` function dynamically renders the list of todos.

## Output
1. The app displays the list of tasks that are added.
2. Each task has a "Delete" button that can remove it from the list.
