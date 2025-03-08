import { Button, Grid2, Link, TextField } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from 'react-router-dom'

export const RegisterPage = () => {

  const onSubmit = ( event ) => {
    event.preventDefault();
  }
  return (
    <AuthLayout title="Register">

      <form onSubmit={onSubmit}>

        <Grid2 container>

          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              helperText="El nombre es obligatorio."
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo"
              fullWidth
              helperText="El correo debe tener un @."
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              helperText="El password debe tener mas de 6 letras."
            />
          </Grid2>

          <Grid2 container sx={{ mb: 2, mt: 1}}  size={12}>

            <Grid2 size={{ xs: 12, sm: 12}}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
              >
                Register
              </Button>
            </Grid2>

          </Grid2>

          <Grid2 container direction='row' justifyContent='end' size={12}>
            ¿Ya tienes cuenta?
            <Link component={RouterLink} color="secondary.main" to="/auth/login" sx={{ ml: 1 }}>
              Ingresar
            </Link>
          </Grid2>


        </Grid2>

      </form>

    </AuthLayout>
  )
}
