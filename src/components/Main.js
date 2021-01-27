import React, {useContext} from 'react'
import styled from 'styled-components'
import Form from './Form'
import List from './List'
import {SpenderContext} from '../context/context'

const Main = () => {
   const {balance} = useContext(SpenderContext);
   return (
      <Wrap>
         <div className="card">
            <h4>Total Balance: ${balance}</h4>
            {/* <p>--demo phrase--</p> */}

            <div className="card-content form">
               <Form/>
            </div>

            <div className="card-content list">
               <List/>
            </div>

         </div>
      </Wrap>
   )
}
const Wrap = styled.div`
.card{
   h4{
      text-align:center;
      font-size:1.5rem;
      margin-bottom:2rem;
   }
   &-content{
      &.form{
         margin-bottom:2rem;
      }
      &.list{
         margin-bottom:2rem;
      }
   }
}
`;
export default Main
