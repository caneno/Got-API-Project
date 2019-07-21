import React from "react";
import './CharacterCard.css';

const CharacterCard = ({characters, clickedItem}) => {



  
  return (
    
    
    <div className='cf tc pr3 pl3 mt6 mb6 ' >
       {
         characters.map((item) => {
          
          if (item.house) {
            return  (
              
                <div class="pic fl w-100 w-20-ns ">
                  <img 
                  onClick={clickedItem} 
                  className=' dib ma1 grow shadow-2' 
                  key={item.id} 
                  src={item.image} 
                  alt={item.name}  
                  />
                </div>
            )
          }
        })
         
       }
    </div>
  );
};

export default CharacterCard;
