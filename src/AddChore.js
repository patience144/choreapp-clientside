import React, { useState } from 'react'


export default function AddChore(props) {
    console.log(props);

    const [chore, setChore] = useState ('');
    console.log(chore);

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
           const body = {chore_name: chore};
           await fetch('http://localhost:5000/chore', {
               method: 'POST',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify(body)
           });
           props.history.goBack();
        } catch (err) npm{
            console.error(err.message);
        }
    }
    return (
        <div >
            <form className='add-chore'> 
                <input type='text' name='Chore' 
                placeholder='add chore' 
                value={chore} 
                onChange={e => setChore(e.target.value)}
                />
                
                <button onClick={onSubmitForm}>Add</button>
                
            </form>
        </div>
    )
}
