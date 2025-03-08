import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { greenTheme } from './greenTheme'


export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={greenTheme}>
        <CssBaseline/>
        { children }
    </ThemeProvider>
  )
}
