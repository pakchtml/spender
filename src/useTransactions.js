import {useContext} from 'react'
import {SpenderContext} from './context/context'
import {incomeCategories,expenseCategories,resetCategories} from './assets/categories'

const useTransactions = (title) => {
   resetCategories();
   const {transactions} = useContext(SpenderContext);
   const transType = transactions.filter(t => t.type === title);
   const total = transType.reduce((acc,curr) => acc += curr.amount, 0);
   const categories = title === 'Income' ? incomeCategories : expenseCategories;
   // console.log({transType, total, categories});
   transType.forEach(t => {
      const category = categories.find(c => c.type === t.category);
      if(category) category.amount += t.amount;
   });
   const filteredCat = categories.filter(c => c.amount > 0);
   const chartData = {
      datasets: [{
         data: filteredCat.map(c => c.amount),
         backgroundColor: filteredCat.map(c => c.color)
      }],
      labels: filteredCat.map(c => c.type)
   };
   
   return {
      // filteredCat,
      total,
      chartData
   };
};

export default useTransactions;