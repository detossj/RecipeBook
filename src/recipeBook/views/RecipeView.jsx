import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid2, IconButton, TextField, Typography } from "@mui/material"


export const RecipeView = () => {
  return (
    <Grid2
        container
        direction="column"
        // justifyContent='space-between'
        alignItems='center'
        sx={{mb: 2}}
    >
        <Grid2 container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 2, width: "100%" }} >
            
            <Grid2 >
                <Typography fontSize={ 30 } fontWeight="light">03 de marzo 2025</Typography>
            </Grid2>

            <Grid2  sx={{ display: 'flex', gap: 2, alignItems: "center" }}>
                <input
                    type="file"
                    multiple
                    style={{display: 'none'}}
                />

                <IconButton
                    color="secondary"
                >
                    <UploadOutlined/>
                </IconButton>

                <Button
                    color="secondary"
                    sx={{padding: 2}}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1}}/>
                    Guardar
                </Button>
            </Grid2>
           

        </Grid2>



        <Grid2 container sx={{ width: '90%'}} >

            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un titulo"
                label="Título"
                sx={{ border: 'none', mb: 1 }}
            />

            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="Ingrese los ingredientes"
                minRows={4}
                label="Ingredientes"
                sx={{ border: 'none', mb: 1 }}
            />

            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="Ingrese la preparacion"
                minRows={4}
                label="Preparacion"
                sx={{ border: 'none', mb: 1 }}
            />

            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese el tiempo de preparacion"
                label="Tiempo"
                sx={{ border: 'none', mb: 1 }}
            />

        </Grid2>

        <Grid2 container justifyContent='start' sx={{ width: '90%'}}>
            <Button
                sx={{ mt: 2 }}
                color="error"
            >
                <DeleteOutline/>
                Borrar
            </Button>
        </Grid2>

        {/* Imagenes */}
    </Grid2>
  )
}
