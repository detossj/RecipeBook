import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

export const greenTheme = createTheme({
    palette: {
        primary: {
            main: '#9EDF9C'
        },
        secondary: {
            main: '#62825D'
        },
        error:{
            main: red.A400
        }
    }
})