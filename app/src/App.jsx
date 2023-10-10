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
            <a href="#add-recipe" onClick={() => setShowAddRecipe(true)}>
              Add Recipe
            </a>
          </li>
          <li>
            <a href="#home" onClick={() => setShowAddRecipe(false)}>
              Home
            </a>
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
