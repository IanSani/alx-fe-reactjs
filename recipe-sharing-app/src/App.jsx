import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import create from 'zustand'
function App() {
  

  return (
    <>
      <RecipeList />
      <AddRecipeForm />
      <recipeStore />
    </>
  )
}

export default App
