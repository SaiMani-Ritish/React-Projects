import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRecipe, updateRecipe } from '../services/api';

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: [''],
    instructions: '',
    cookingTime: '',
    difficulty: 'Medium'
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getRecipe(id);
        setRecipe(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipe:', error);
        setError('Failed to load recipe data.');
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...recipe.ingredients];
    updatedIngredients[index] = value;
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  const addIngredientField = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ''] });
  };

  const removeIngredientField = (index) => {
    const updatedIngredients = recipe.ingredients.filter((_, i) => i !== index);
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      // Filter out empty ingredients
      const filteredIngredients = recipe.ingredients.filter(ingredient => ingredient.trim() !== '');
      const recipeData = { ...recipe, ingredients: filteredIngredients };
      
      await updateRecipe(id, recipeData);
      navigate(`/${id}`);
    } catch (error) {
      setError('Failed to update recipe. Please try again.');
      console.error('Error updating recipe:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border"></div></div>;
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2>Edit Recipe</h2>
      </div>
      <div className="card-body">
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Recipe Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={recipe.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Ingredients</label>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(index, e.target.value)}
                  placeholder={`Ingredient ${index + 1}`}
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => removeIngredientField(index)}
                  disabled={recipe.ingredients.length === 1}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={addIngredientField}
            >
              Add Ingredient
            </button>
          </div>

          <div className="mb-3">
            <label htmlFor="instructions" className="form-label">Cooking Instructions</label>
            <textarea
              className="form-control"
              id="instructions"
              name="instructions"
              rows="5"
              value={recipe.instructions}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="cookingTime" className="form-label">Cooking Time (minutes)</label>
              <input
                type="number"
                className="form-control"
                id="cookingTime"
                name="cookingTime"
                value={recipe.cookingTime}
                onChange={handleChange}
                min="1"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="difficulty" className="form-label">Difficulty</label>
              <select
                className="form-select"
                id="difficulty"
                name="difficulty"
                value={recipe.difficulty}
                onChange={handleChange}
                required
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate(`/${id}`)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={submitting}
            >
              {submitting ? 'Updating...' : 'Update Recipe'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRecipe;