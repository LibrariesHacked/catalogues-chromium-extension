import * as React from 'react'
import * as ReactDOM from 'react-dom'

import PopupApp from './PopupApp'
import './popup.css'

var mountNode = document.getElementById('popup')
ReactDOM.render(<PopupApp />, mountNode)
