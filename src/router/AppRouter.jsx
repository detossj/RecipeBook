import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { RecipeBookRoutes } from "../recipeBook/routes/RecipeBookRoutes"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={ <AuthRoutes/> }/>
        <Route path="/*" element= { <RecipeBookRoutes/> }/>
    </Routes>
  )
}
