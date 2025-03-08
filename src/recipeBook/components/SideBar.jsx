import { Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box 
        component='nav'
        sx={{ width: { sm: drawerWidth }}}
    >
        <Drawer
            variant="permanent"
            open= {true}
            sx={{
                display: { xs: 'block'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >

            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Usuario
                </Typography>
            </Toolbar>

            <Divider/>

            <List>
                {/* Nombre Recetas */}
            </List>

        </Drawer>

    </Box>
  )
}
