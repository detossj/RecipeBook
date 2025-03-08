import { IconButton } from "@mui/material"
import { RecipeBookLayout } from "../layout/RecipeBookLayout"
import { AddOutlined } from '@mui/icons-material'


export const RecipeBookPage = () => {
  return (
    <RecipeBookLayout>

      {/* Mostrar RecipeView o NothingSelectedView */}
      <IconButton
        size="large"
        sx={{ 
          color: "white",
          backgroundColor: 'error.main',
          ':hover' : { backgroundColor: 'error.main', opacity: 0.8 },
          position: "fixed",
          right: 50,
          bottom: 50
        }}
          
      >
        <AddOutlined sx={{ fontSize: 40 }}/>
      </IconButton>
    </RecipeBookLayout>
  )
}
