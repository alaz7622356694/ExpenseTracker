import React from 'react';

import "./ExpensesFilter.css"

const ExpensesFilter = (props) => {
 
 const dropdownChangeHandler=(event)=>{
props.onChangeFilter(event.target.value)


 }

 const dropdownChangeHandler2=(event)=>{
  
  props.onChangeFilter2(event.target.value)
  
   }


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
         
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          
        </select>
        <label>Filter by Month</label>
        <select value={props.selected2} onChange={dropdownChangeHandler2} >
          <option value='January' >Jan</option>
          <option value='February' >Feb</option>
          <option value='March' >Mar</option>
          <option value='April' >Apr</option>
          <option value='May' >May</option>
          <option value='June' >Jun</option>
          <option value='July' >Jul</option>
          <option value='August' >Aug</option>
          <option value='September' >Sep</option>
          <option value='October' >Oct</option>
          <option value='November' >Nov</option>
          <option value='December' >Dec</option>

        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;