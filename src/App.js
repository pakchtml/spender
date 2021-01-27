import React from 'react'
import GS from './assets/Globalstyles'
import styled from 'styled-components'
import Details from './components/Details'
import Main from './components/Main'
// import {PushToTalkButton,PushToTalkButtonContainer,ErrorPanel} from '@speechly/react-ui'

const App = () => {
   return (
      <Wrap>
         <div className="main-wrap">
            <h1>spender</h1>

            <div className="wrap-details">
               <Details title="Income" />
               <Details title="Expense" />
            </div>

            <div className="wrap-main">
               <Main/>
            </div>
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
height:100vh; overflow-y:auto;
/* background-image:linear-gradient(-25deg, white,pink, pink,white); */
background-color:#c6daeb;
.main-wrap{
   max-width:800px;
   margin:0 auto;
   @media(max-width:830px){padding:0 30px;}
   @media(max-width:659px){
      display:flex; flex-direction:column-reverse;
   }
   h1{
      text-align:center;
      text-transform:uppercase;
      margin:2rem 0;
      @media(max-width:659px){order:1; margin:unset; padding-top:2rem;}
   }
}
.wrap-{
   &details{
      display:grid; grid-template-columns:1fr 1fr; grid-gap:2rem;
      margin-bottom:2rem;
      @media(max-width:659px){
         grid-template-columns:1fr;
         padding:0 4rem;
      }
      @media(max-width:559px){padding:unset;}
   }
   &main{
      margin:2rem 0;
   }
}
`;
export default App
