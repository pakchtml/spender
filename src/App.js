import React from 'react'
import GS from './assets/Globalstyles'
import styled from 'styled-components'
import Details from './components/Details'
import Main from './components/Main'
// import {PushToTalkButton,PushToTalkButtonContainer,ErrorPanel} from '@speechly/react-ui'

const App = () => {
   return (
      <Wrap>
         <h1>spender</h1>

         <div className="wrap-details">
            <Details title="Income" />
            <Details title="Expense" />
         </div>

         <div className="wrap-main">
            <Main/>
         </div>

         {/* <PushToTalkButtonContainer>
            <PushToTalkButton/>
            <ErrorPanel/>
         </PushToTalkButtonContainer> */}
         <GS/>
      </Wrap>
   )
}
const Wrap = styled.div`
.wrap-{
   &details{
      display:grid; grid-template-columns:1fr 1fr; grid-gap:1rem;
   }
}
`;
export default App
