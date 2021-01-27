import React, {useContext} from 'react'
import styled from 'styled-components'
import {FaTrash} from 'react-icons/fa'
import {SpenderContext} from '../context/context'

const List = () => {
   const {transactions, deleteTransaction} = useContext(SpenderContext);

   return (
      <Wrap>
         <ul className="transactions">
            {
               transactions.map(t => (
                  <li key={t.id} className={t.type === 'Income' ? 'transaction income' : 'transaction expense'}>
                     <p>{t.category}</p>
                     <p className="date">{t.date}</p>
                     <p className="amt">${t.amount}</p>
                     <span>
                        <FaTrash className="icon-delete" onClick={() => deleteTransaction(t.id)} />
                     </span>
                  </li>
               ))
            }
         </ul>
      </Wrap>
   )
}
const Wrap = styled.div`
.transactions{
   height:200px; overflow-y:auto;
   .transaction{
      padding:5px 5px 2px 5px;
      display:grid; grid-template-columns:3fr 3fr 2fr 1fr;
      border-radius:7px;
      p{
         &.date{text-align:center;}
         &.amt{text-align:center;}
      }
      span{text-align:right; cursor:pointer;}
      &.income{background-color:#289443; color:white;}
      &.expense{background-color:#f18f8f;}
      :not(:first-of-type){
         margin-top:10px;
         @media(max-width:419px){margin-top:14px;}
      }
      @media(max-width:419px){font-size:.9rem;}
   }
   &::-webkit-scrollbar{display:none;}
}
`;
export default List
