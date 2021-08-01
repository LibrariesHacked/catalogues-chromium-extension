import * as React from 'react'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'

import blueGrey from '@material-ui/core/colors/blueGrey'
import green from '@material-ui/core/colors/green'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: green[700]
    },
    secondary: {
      main: blueGrey[700]
    },
    outline: {
      main: blueGrey[50]
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        },
      },
    },
  }
})

const PopupApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant='text'>Close</Button>
    </ThemeProvider>
  )
}

export default PopupApp
