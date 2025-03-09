import { Grid2, Typography } from "@mui/material"
import { FoodBankOutlined } from '@mui/icons-material'

export const NothingSelectedView = () => {
  return (
    <Grid2
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{ minHeight: 'calc(100vh - 110px)',backgroundColor: 'primary.main', borderRadius: 3, display: 'flex', textAlign: 'center' }}
    >

        <Grid2 size={{ xs: 12 }} >
            <FoodBankOutlined sx={{ fontSize: 150, color: 'white'}}/>
        </Grid2>

        <Grid2 size={{ xs: 12 }} >
            <Typography color="white" variant="h4">Selecciona o crea una receta</Typography>
        </Grid2>

    </Grid2>
  )
}
