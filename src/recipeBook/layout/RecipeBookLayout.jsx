import { Box, Toolbar } from '@mui/material'
import { NavBar } from '../components/Navbar';
import { SideBar } from '../components/SideBar';


export const RecipeBookLayout = ({children}) => {

    const drawerWidth = 280;
    return (
        <Box sx={{display: 'flex'}}>

            <NavBar drawerWidth={drawerWidth}/>

            <SideBar drawerWidth={drawerWidth}/>

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3}}
            >
                <Toolbar/>
                { children }
            </Box>
        </Box>
  )
}
