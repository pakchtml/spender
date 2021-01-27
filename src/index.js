import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Provider from './context/context'
// import {SpeechProvider} from '@speechly/react-client'

ReactDOM.render(
   // <SpeechProvider appId="c8b3de82-901d-42a8-b523-f95a1ce29809" language="en-US">
   // </SpeechProvider>
      <Provider>
         <App/>
      </Provider>
   ,
   document.getElementById('root')
)