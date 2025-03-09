import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getAllRecipes, deleteRecipe } from '../services/api';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const data = await getAllRecipes();
      setRecipes(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      try {
        await deleteRecipe(id);
        fetchRecipes();
      } catch (error) {
        console.error('Error deleting recipe:', error);
      }
    }
  };

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border"></div></div>;
  }

  return (
    <div className="row">
      <div className={id ? "col-md-4" : "col-md-12"}>
        <h2>Recipe List</h2>
        {recipes.length === 0 ? (
          <p>No recipes found. Add some recipes to get started!</p>
        ) : (
          <div className="list-group">
            {recipes.map((recipe) => (
              <div key={recipe._id} className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <Link to={`/${recipe._id}`} className="mb-1 text-decoration-none">
                    <h5>{recipe.name}</h5>
                  </Link>
                  <div>
                    <Link to={`/edit/${recipe._id}`} className="btn btn-sm btn-secondary me-2">
                      Edit
                    </Link>
                    <button 
                      onClick={() => handleDelete(recipe._id)} 
                      className="btn btn-sm btn-secondary"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p className="mb-1">Difficulty: {recipe.difficulty}</p>
                <small>Cooking Time: {recipe.cookingTime} minutes</small>
              </div>
            ))}
          </div>
        )}
      </div>
      {id && (
        <div className="col-md-8">
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default RecipeList;