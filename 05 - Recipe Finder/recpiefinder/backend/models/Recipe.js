const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  cookingTime: {
    type: Number,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Medium'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Recipe', RecipeSchema);