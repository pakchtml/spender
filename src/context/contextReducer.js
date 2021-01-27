const contextReducer = (state,action) => {
   let trans;
   switch(action.type) {
      case 'ADD_TRANSACTION':
         trans = [ action.payload, ...state ];
         localStorage.setItem('transaction', JSON.stringify(trans));
         return trans;

      case 'DELETE_TRANSACTION':
         trans = state.filter(t => t.id !== action.payload);
         localStorage.setItem('transaction', JSON.stringify(trans));
         return trans;

      default:
         return state;
   }
};

export default contextReducer;