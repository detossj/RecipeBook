import { IconButton } from "@mui/material"
import { RecipeBookLayout } from "../layout/RecipeBookLayout"
import { AddOutlined } from '@mui/icons-material'
import { NothingSelectedView } from "../views/NothingSelectedView"


export const RecipeBookPage = () => {
  return (
    <RecipeBookLayout>

      <NothingSelectedView/>
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
