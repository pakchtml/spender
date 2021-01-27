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

            <div className="card-content">
               <Form/>
            </div>

            <div className="card-content">
               <List/>
            </div>

         </div>
      </Wrap>
   )
}
const Wrap = styled.div`

`;
export default Main
