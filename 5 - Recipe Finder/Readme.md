# PE05 -  Recipe Finder 

## Input
- User input through form fields to add and update recipes
- Recipe data includes name, ingredients, instructions, cooking time, and difficulty
- Button clicks to trigger CRUD operations
- URL parameters to identify specific recipes for viewing and editing

## Process
- React Router manages navigation and URL parameters to different app sections
- React components handle user input and display recipe information
- Express server processes HTTP requests for CRUD operations
- MongoDB Atlas stores and retrieves recipe data
- CRUD operations allow creating, reading, updating, and deleting recipes
- Nested routes display recipe details within the list view

## Output
- List of available recipes with basic information
- Detailed view of individual recipes
- Forms for adding and editing recipes
- Confirmation messages for successful operations
- Error messages when operations fail