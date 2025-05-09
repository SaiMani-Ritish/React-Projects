# Movie List - PE02

## Input
The application accepts user input through:
1. A dropdown menu to select a movie genre.
2. Click events on movie items to display an alert with the movie title.

The input data includes an array of movie objects,each containing the title, genre, and release year. The user interacts with the dropdown to filter movies and clicks a movie item to trigger alerts.

## Process
1. The application initializes with a predefined list of movies.
2. It dynamically generates a dropdown menu with unique genres extracted from the movie list.
3. When the user selects a genre, the program filters the movie list based on the selection.
4. Clicking on a movie triggers an event handler that displays the movie title in an alert box.

The filtering logic and dynamic rendering are achieved using React hooks like `useState`.

## Output
1. The application displays a list of movies (title, genre, release year) as styled list items.
2. A filtered list of movies is displayed when a genre is selected from the dropdown.
3. Clicking a movie shows its title in an alert box.

