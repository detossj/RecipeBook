import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { orangeTheme } from './orangeTheme'


export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={orangeTheme}>
        <CssBaseline/>
        { children }
    </ThemeProvider>
  )
}
