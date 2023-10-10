import React, { useState } from 'react';
import './App.css';
import AddRecipe from './components/Addrecipe';
import Home from './components/Home';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <input
              type="radio"
              id="add-recipe"
              name="view"
              value="add-recipe"
              checked={showAddRecipe}
              onChange={() => setShowAddRecipe(true)}
            />
            <label htmlFor="add-recipe">Add Recipe</label>
          </li>
          <li>
            <input
              type="radio"
              id="home"
              name="view"
              value="home"
              checked={!showAddRecipe}
              onChange={() => setShowAddRecipe(false)}
            />
            <label htmlFor="home">Home</label>
          </li>
        </ul>
      </nav>
      {showAddRecipe ? (
        <AddRecipe addRecipe={addRecipe} />
      ) : (
        <Home recipes={recipes} />
      )}
    </div>
  );
}

export default App;
