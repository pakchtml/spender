import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import {SpenderContext} from '../context/context'
import {v4 as uuid} from 'uuid'
import {incomeCategories, expenseCategories} from '../assets/categories'
// import formatDate from '../utils/formatDate'
// import {useSpeechContext} from '@speechly/react-client'

const initState = {
   amount: '',
   category: '',
   type: 'Income',
   // date: formatDate(new Date())
   date: ''
};

const Form = () => {
   const [formData, formDataSet] = useState(initState);

   const {addTransaction} = useContext(SpenderContext);

   // const {segment} = useSpeechContext();

   const createTrans = e => {
      e.preventDefault();
      const t = {...formData, id: uuid(), amount: Number(formData.amount)};
      addTransaction(t);
      formDataSet(initState);
   };

   // console.log(formData);

   const selectedCat = formData.type === 'Income' ? incomeCategories : expenseCategories;

   return (
      <Wrap>
         <form onSubmit={createTrans}>
            <div className="form-data">
               <label htmlFor="form-type">Type</label>
               <select required id="form-type" value={formData.type} onChange={e => formDataSet({...formData, type: e.target.value})}>
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
               </select>
            </div>

            <div className="form-data">
               <label htmlFor="form-category">Category</label>
               <select required id="form-category" value={formData.category} onChange={e => formDataSet({...formData, category: e.target.value})}>
                  {
                     selectedCat.map(c => <option value={c.type} key={c.type}>{c.type}</option>)
                  }
               </select>
            </div>

            <div className="form-data">
               <label htmlFor="form-amount">Amount</label>
               <input required type="number" id="form-amount" value={formData.amount} onChange={e => formDataSet({...formData, amount: e.target.value})} />
            </div>

            <div className="form-data">
               <label htmlFor="form-date">Date</label>
               {/* <input type="date" id="form-date" value={formData.date} onChange={e => formDataSet({...formData, date: formatDate(e.target.value)})} /> */}
               <input required type="date" id="form-date" value={formData.date} onChange={e => formDataSet({...formData, date: e.target.value})} />
            </div>

            {/* <div className="speechly-text">
               {
                  segment && (<>
                     {segment.words.map(w => w.value).join(' ')}
                  </>)
               }
            </div> */}

            <input className="btn-create" type="submit" value="create" />
         </form>
      </Wrap>
   )
}
const Wrap = styled.div`
.btn-create{width:100%;}
form{
   display:grid; grid-template-columns:1fr 1fr;
   grid-column-gap:2rem; grid-row-gap:1rem;
   @media(max-width:759px){grid-template-columns:1fr;}
   .form-data{
      display:grid; grid-template-columns:1fr 4fr;
      select, & input{
         padding:3px 5px;
         font-size:1rem;
         border:none; outline:none;
         border-radius:7px;
         &:focus{
            background-color:rgb(235,235,235);
         }
      }
   }
   .btn-create{
      grid-column:1 / 3;
      border:none; outline:none;
      background-color:#3a78b3; color:white; border-radius:7px;
      padding:5px;
      font-size:1.35rem; letter-spacing:2px;
      text-transform:uppercase;
      @media(max-width:759px){grid-column:unset;}
   }
}
`;
export default Form
