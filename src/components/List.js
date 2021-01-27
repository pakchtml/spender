import React, {useContext} from 'react'
import styled from 'styled-components'
import {FaTrash} from 'react-icons/fa'
import {SpenderContext} from '../context/context'

const List = () => {
   const {transactions, deleteTransaction} = useContext(SpenderContext);

   // const transactions = [
   //    {id:0, type:'Income', category:'Business', amount:20, date:'wed jan 11'},
   //    {id:1, type:'Income', category:'Salary', amount:200, date:'tues jan 10'},
   //    {id:2, type:'Expense', category:'Food', amount:10, date:'Sun jan 8'},
   // ];

   return (
      <Wrap>
         <ul className="transactions">
            {
               transactions.map(t => (
                  <li key={t.id} className={t.type === 'Income' ? 'transaction income' : 'transaction expense'}>
                     <p>{t.category}</p>
                     <p>{t.date}</p>
                     <p>${t.amount}</p>
                     <FaTrash className="icon-delete" onClick={() => deleteTransaction(t.id)} />
                  </li>
               ))
            }
         </ul>
      </Wrap>
   )
}
const Wrap = styled.div`
.transactions{
   .transaction{
      &.income{background-color:dodgerblue;}
      &.expense{background-color:orange;}
      display:grid; grid-template-columns:repeat(3,2fr) 1fr;
   }
}
`;
export default List
