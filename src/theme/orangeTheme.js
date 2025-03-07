import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

export const orangeTheme = createTheme({
    palette: {
        primary: {
            main: '#C14600'
        },
        secondary: {
            main: '#FF9D23'
        },
        error:{
            main: red.A400
        }
    }
})