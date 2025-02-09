# cs628-PE-SaiManiRitishU
## PE01 - Resume

The program uses predefined user data such as personal details, education, skills, work experience, and projects. These details are stored as JSX elements within the Resume.js file. No dynamic input is required from the user.


The app is built using React, a JavaScript library for creating user interfaces. The main component, Resume.js, organizes the resume content into sections like header, education, skills, experience, and projects. Styling is applied through an external CSS file, Resume.css, which ensures the layout adheres to the specified requirements, including a background color of rgba(189, 251, 4, 1) and default black text. The App.js file imports and renders the Resume component, serving as the entry point for the application.

Output
The program generates a responsive web page showcasing the user's resume with a professional design. The final output can be viewed in a browser using the development server provided by React (npm start). The design aligns with the sample output provided in the assignment.

## PE02 - Movie List 

The application accepts user input through:
1. A dropdown menu to select a movie genre.
2. Click events on movie items to display an alert with the movie title.

The input data includes an array of movie objects,each containing the title, genre, and release year. The user interacts with the dropdown to filter movies and clicks a movie item to trigger alerts.

1. The application initializes with a predefined list of movies.
2. It dynamically generates a dropdown menu with unique genres extracted from the movie list.
3. When the user selects a genre, the program filters the movie list based on the selection.
4. Clicking on a movie triggers an event handler that displays the movie title in an alert box.

The filtering logic and dynamic rendering are achieved using React hooks like 'useState'.

1. The application displays a list of movies (title, genre, release year) as styled list items.
2. A filtered list of movies is displayed when a genre is selected from the dropdown.
3. Clicking a movie shows its title in an alert box.

# PE03 - Todo List App

Input
- The user can input a task description in the input field.
- By clicking the "Add Task" button we can add the task to the list.
- The user can click the "Delete" button next to a task to remove a task from the list.

Process
- The app is using React's `useState` hook to manage the state of the todos and the input value.
- When the "Add Task" button is clicked, then the input value is added to the `todos` array.
- When the "Delete" button is clicked, the task is removed from the `todos` array.
- The `.map()` function dynamically renders the list of todos.

Output
- The app displays the list of tasks that are added.
- Each task has a "Delete" button that can remove it from the list.

