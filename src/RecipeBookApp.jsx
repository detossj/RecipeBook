import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme/Apptheme"


export const RecipeBookApp = () => {
  return (
    <AppTheme>
      <AppRouter/>
    </AppTheme>
  )
}
