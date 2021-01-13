import React, { useState, useEffect } from "react"


function ChoreItem() {
    const[ chore, setChores ] = useState([]);

    async function getChores() {
        const res = await fetch("http://localhost:5000/chore");

        const choreArray = await res.json();
        console.log(choreArray);
    }

    useEffect(() => {
        getChores();
    }, []);

    return (


        <div className="chore-item">
            
            <h3 className='h3item'>Chores</h3>
            <input type='checkbox'/>
            <p className='item-ph'>placeholder</p>
            <button className='item-button'>Edit</button>
            <button className='item-button'>Delete</button>
            
           
               {chore.map(chore => (
                   <tr>
                      <td>{chore.chore_name}</td> 
                      <td>
                        
                      </td>
                   </tr>
               ))}
            
        </div>
        
    )
}

export default ChoreItem