import React from "react";

const Search = ({selectItem, searchfield, dropDown}) => {

 const charArray = selectItem.map(
  ( house) => {
   return house.house;  
   }
 )
 
const uniqueNames = charArray.filter(function(i, index){
  return charArray.indexOf(i) >= index
});
let unique = [...new Set(uniqueNames)];




  return (
    <div className='tc'>
      <h1 className='mt4 mb3'>GAME OF THRONES</h1>
      <h3 className='mt2'>Houses</h3>
        <select onChange={dropDown} className='ma2'>
            <option>Select House</option>
            {unique.map((select) => {
              
                  {if (select === undefined) {
                    return <option value='Unknown'>Unknown</option>
                    
                  }else {
                    return <option value={select}>{select}</option>
                    
                  }
                }
              })
            }
        </select> 
    </div>
  );
};

export default Search;
