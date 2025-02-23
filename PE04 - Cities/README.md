# PE04 - Cities 

## Input
The application accepts several types of user inputs:
- City information through a form, including:
  - City name (text)
  - Country name (text)
  - Population (number)
  - Famous landmark (text)
- User interactions via navigation links
- City selection from the list for viewing details

## Process
The application processes data through several mechanisms:
- React Router handles navigation between different views
- LocalStorage manages data persistence, storing and retrieving city information
- State management using React hooks (useState, useEffect) maintains the application's data flow
- Form validation ensures required fields are filled before submission
- Dynamic rendering of city details based on URL parameters
- Data transformation for display (e.g., population number formatting)

## Output
The application produces the following outputs:
- A navigable list of all added cities
- Detailed view of selected city information
- Form confirmation through redirection after successful submission
- Structured display of city information including formatted population numbers
- Interactive UI elements (navigation links, forms, city selection)
- Persistent data storage that survives page refreshes
