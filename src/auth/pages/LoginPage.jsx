import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout"
import { Google } from '@mui/icons-material'




export const LoginPage = () => {

  const onSubmit = ( event ) => {
    event.preventDefault();
  }

  return (
    <AuthLayout title="Login">

      <form onSubmit={onSubmit}>

        <Grid2 container >

          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }} >
            <TextField 
              label="Correo"
              type="email"
              placeholder='correo@google.com'
              fullWidth 
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField 
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth 
            />
          </Grid2>

          <Grid2 container direction='row' justifyContent='end' size={12} sx={{ mt: 2 }}>
            <Link color='secondary.main'>
              ¿Olvidaste tu contraseña?
            </Link>
          </Grid2>

          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }} size={12} >

            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid2>
            
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button
              type="submit"
                variant="contained"
                fullWidth
              >
                <Google/>
                <Typography sx={{ ml: 1}}>Google</Typography>
              </Button>
            </Grid2>


          </Grid2>
          
          <Grid2 container direction='row' justifyContent='end' size={12}>
            ¿No tienes cuenta?
            <Link component={ RouterLink } color='secondary.main' to="/auth/register" sx={{ ml: 1}}>
              Regístrate
            </Link>
          </Grid2>

        </Grid2>

      </form>

    </AuthLayout>
  )
}
