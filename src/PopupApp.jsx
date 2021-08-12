import * as React from 'react'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'

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
  { field: 'id', headerName: 'ISBN', flex: 1, minWidth: 150 }
]

const PopupApp = () => {
  const [navIndex, setNavIndex] = React.useState(0)
  const [rows, setRows] = React.useState([])

  chrome.storage.sync.get(['isbns'], function (result) {
    var storage = result['isbns'] ? result['isbns'] : []
    var isbns = storage.map(isbn => { return { id: isbn } })
    setRows(isbns)
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography variant="h6" gutterBottom component="h2">
          Book browsing history
        </Typography>

        <div style={{ height: 400, width: '100%' }}>
          <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flexGrow: 1 }}>
              <DataGrid density='comfortable' rows={rows} columns={columns} autoPageSize autoHeight />
            </div>
          </div>
        </div>

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
      </Container>
    </ThemeProvider>
  )
}

export default PopupApp
