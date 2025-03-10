import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<RecipeList />}>
              <Route path=":id" element={<RecipeDetails />} />
            </Route>
            <Route path="/add" element={<AddRecipe />} />
            <Route path="/edit/:id" element={<EditRecipe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;