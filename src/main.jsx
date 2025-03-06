import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RecipeBookApp } from './RecipeBookApp'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RecipeBookApp/>
    </BrowserRouter>
  </StrictMode>,
)
