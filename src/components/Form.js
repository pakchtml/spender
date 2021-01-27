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
               <select id="form-type" value={formData.type} onChange={e => formDataSet({...formData, type: e.target.value})}>
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
               </select>
            </div>

            <div className="form-data">
               <label htmlFor="form-category">Category</label>
               <select id="form-category" value={formData.category} onChange={e => formDataSet({...formData, category: e.target.value})}>
                  {
                     selectedCat.map(c => <option value={c.type} key={c.type}>{c.type}</option>)
                  }
               </select>
            </div>

            <div className="form-data">
               <label htmlFor="form-amount">Amount</label>
               <input type="number" id="form-amount" value={formData.amount} onChange={e => formDataSet({...formData, amount: e.target.value})} />
            </div>

            <div className="form-data">
               <label htmlFor="form-date">Date</label>
               {/* <input type="date" id="form-date" value={formData.date} onChange={e => formDataSet({...formData, date: formatDate(e.target.value)})} /> */}
               <input type="date" id="form-date" value={formData.date} onChange={e => formDataSet({...formData, date: e.target.value})} />
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
`;
export default Form
