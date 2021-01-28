import React from 'react'
import styled from 'styled-components'
import {Doughnut} from 'react-chartjs-2'
import useTransactions from '../useTransactions'

const Details = ({title}) => {
   const {total, chartData} = useTransactions(title);

   return (
      <Wrap>
         <h3>{title}</h3>
         <div className="card">
            <h5>${total.toFixed(2)}</h5>
            <Doughnut data={chartData}/>
         </div>
      </Wrap>
   )
}
const Wrap = styled.div`
background-color:white;
text-align:center;
padding:2rem 0;
border-radius:7px;
h3{font-size:1.5rem;margin-bottom:.3rem;}
h5{font-size:1.5rem;}
`;
export default Details
