import React, { Fragment } from 'react'
import { render } from 'react-dom'
//import { Provider } from 'react-redux'

import GlobalStyle from './_global/styles'

//import { store } from './_global/store'
import App from './App'

render(
    <Fragment>
        <GlobalStyle />
        <App />
    </Fragment>,
    document.getElementById('root')
)

// render(
//     <Provider store={store}>
//         <GlobalStyle />
//         <App />
//     </Provider>,
//     document.getElementById('root')
// )
