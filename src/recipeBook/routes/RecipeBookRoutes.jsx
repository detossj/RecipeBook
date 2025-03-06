import { Navigate, Route, Routes } from "react-router-dom"
import { RecipeBookPage } from "../pages/RecipeBookPage"

export const RecipeBookRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <RecipeBookPage/> }/>
        <Route path="/*" element={ <Navigate to='/'/> }/>
    </Routes>
  )
}
