import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid2, IconButton, Toolbar, Typography } from '@mui/material'


export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
        position='fixed'
        sx={{
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${ drawerWidth }px` }
        }}
    >

        <Toolbar>

            <IconButton
                color='inherit'
                edge="start"
                sx={{ mr: 2, display: {sm: 'none'}}}
            >
                <MenuOutlined/>
            </IconButton>

            <Grid2 container direction='row' justifyContent='space-between' alignContent='center' flexGrow={1}>
                <Typography variant='h6' noWrap component="div" > RecipeBook </Typography>
            </Grid2>

            <IconButton color='error'>
                <LogoutOutlined />
            </IconButton>


          
        </Toolbar>

    </AppBar>
  )
}
