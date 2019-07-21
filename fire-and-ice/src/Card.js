import React from 'react';
import './Card.css';


const Card = ({charName, clickedItem}) => {
    return (  
        <div className='bg-card cf tc pr3 pl3 mt6 mb6' onClick={clickedItem}>
            
                            {
                                charName.map((item) => {
                                
                                if (item.house) {
                                    return ( 
                                        <div className='fl w-100 w-20-ns'>
                                            <div className='card-content'>
                                                    <h2>
                                                        {item.name}
                                                    </h2>
                                                <ul className='pa3'>
                                                    <li>
                                                        Actor's Name:  {item.actor}
                                                    </li>
                                                    <li>
                                                        House Name:  {item.house}
                                                    </li>
                                                    <li>
                                                        Allegiances:  {item.allegiances}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                }
                                })
                                
                            }
                            
        </div>
    );
}
 
export default Card;