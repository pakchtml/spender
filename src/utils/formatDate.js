const formatDate = (date) => {
   const d = new Date(date);
   let mon = `${d.getMonth() + 1}`;
   let day = `${d.getDate()}`;
   const yr = d.getFullYear();

   if(mon.length < 2) mon = `0${mon}`;
   if(day.length < 2) day = `0${day}`;

   return [yr, mon, day].join('-');
};

export default formatDate;