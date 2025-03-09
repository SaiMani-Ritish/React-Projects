import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRecipe } from '../services/api';

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getRecipe(id);
        setRecipe(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border"></div></div>;
  }

  if (!recipe) {
    return <div className="alert alert-danger">Recipe not found!</div>;
  }

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h3>{recipe.name}</h3>
        <Link to={`/edit/${recipe._id}`} className="btn btn-warning">
          Edit Recipe
        </Link>
      </div>
      <div className="card-body">
        <div className="mb-4">
          <h5>Difficulty: {recipe.difficulty}</h5>
          <h6>Cooking Time: {recipe.cookingTime} minutes</h6>
        </div>
        
        <h4>Ingredients:</h4>
        <ul className="list-group mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="list-group-item">{ingredient}</li>
          ))}
        </ul>
        
        <h4>Instructions:</h4>
        <div className="card">
          <div className="card-body">
            {recipe.instructions.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="card-footer text-muted">
        Created on: {new Date(recipe.createdAt).toLocaleString()}
      </div>
    </div>
  );
};

export default RecipeDetails;