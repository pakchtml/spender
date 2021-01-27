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
            <h5>${total}</h5>
            <Doughnut data={chartData}/>
         </div>
      </Wrap>
   )
}
const Wrap = styled.div`
text-align:center;
`;
export default Details
