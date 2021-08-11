import * as React from 'react'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'

import { DataGrid } from '@material-ui/data-grid'

import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ArchiveIcon from '@material-ui/icons/Archive'

import blueGrey from '@material-ui/core/colors/blueGrey'
import green from '@material-ui/core/colors/green'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

const libraries = require('catalogues-library')

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

const columns = [
  { field: 'isbn', headerName: 'ISBN' }
];

const PopupApp = () => {
  const [navIndex, setNavIndex] = React.useState(0)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper>
        <DataGrid rows={[]} columns={columns} pageSize={5} checkboxSelection />

        <Button variant='text'>Close</Button>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={navIndex}
            onChange={(event, value) => {
              setNavIndex(value)
            }}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
          </BottomNavigation>
        </Paper>
      </Paper>
    </ThemeProvider>
  )
}

export default PopupApp
