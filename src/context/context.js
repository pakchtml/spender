import React, {createContext, useReducer} from 'react'
import contextReducer from './contextReducer'

const initState = JSON.parse(localStorage.getItem('transaction')) || [
   {"amount":80,"category":"Phone","type":"Expense","date":"2021-01-21","id":"7652be2a-f098-4eab-bcc1-7f1ff50ba70c"},
   {"amount":100,"category":"Entertainment","type":"Expense","date":"2021-01-21","id":"3b40f8a7-5c1b-4df8-8d4e-84e9f678cda6"},
   {"amount":700,"category":"Car","type":"Expense","date":"2021-01-21","id":"2091a0cc-b3ee-49cb-b5d1-89eca9bf5fd9"},
   {"amount":111,"category":"Salary","type":"Income","date":"2021-01-21","id":"dfea1420-3aa4-42c2-b376-17df65901a82"},
   {"amount":55,"category":"Investments","type":"Income","date":"2021-01-21","id":"8d3a7bb7-e7e7-4438-9d3a-0ce24c49fa07"},
   {"amount":45,"category":"Lottery","type":"Income","date":"2021-01-21","id":"f2f313a5-2285-4cf6-9519-b3d579bdfcfb"},
   {"amount":100,"category":"Savings","type":"Income","date":"2021-01-19","id":"dedbce82-9da0-4411-949c-9c4e972ba353"}
];

export const SpenderContext = createContext(initState);

const Provider = ({children}) => {
   // const [state, dispatch] = useReducer(reducer, initialState, init)
   const [transactions, dispatch] = useReducer(contextReducer, initState);

   // console.log(transactions);

   // ACTIONS
   const addTransaction = (t) => dispatch({ type: 'ADD_TRANSACTION', payload: t });
   const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id });
   const balance = transactions.reduce((acc,cur) => {
      return (cur.type === 'Expense' ? acc - cur.amount : acc + cur.amount);
   }, 0)

   return(
      <SpenderContext.Provider value={{
         transactions, addTransaction, deleteTransaction, balance
      }}>
         {children}
      </SpenderContext.Provider>
   )
};

export default Provider;