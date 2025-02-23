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

## PE03 - Todo List App

Input
1. The user can input a task description in the input field.
2. By clicking the "Add Task" button we can add the task to the list.
3. The user can click the "Delete" button next to a task to remove a task from the list.

Process
1. The app is using React's `useState` hook to manage the state of the todos and the input value.
2. When the "Add Task" button is clicked, then the input value is added to the `todos` array.
3. When the "Delete" button is clicked, the task is removed from the `todos` array.
4. The `.map()` function dynamically renders the list of todos.

Output
1. The app displays the list of tasks that are added.
2. Each task has a "Delete" button that can remove it from the list.


## PE04 - Cities

Input

The application takes the following types of user inputs:
- City information through a form, including:
  - City name (text)
  - Country name (text)
  - Population (number)
  - Famous landmark (text)
- City selection from the list for viewing details

Process

The application processes data through these mechanisms:
- React Router handles navigation between different views
- LocalStorage manages data persistence by storing and retrieving city information
- State management using React hooks like (useState, useEffect) helps maintain the application's data flow
- Form validation is used to ensure required fields are filled before submission
- Dynamic rendering of city details based on URL parameters
- Data transformation for display (e.g., population number formatting)

Output

The application produces the following outputs:
- A navigable list of all added cities
- A detailed view of selected city information
- Form confirmation through redirection after successful submission
- Structured display of information including formatted population numbers
- Interactive UI elements (navigation links, forms, city selection)
- Persistent data storage that will survive page refreshes

