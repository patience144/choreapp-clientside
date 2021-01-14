import React from 'react';
import api from './api';

export default class AddChore extends React.Component {
    state = { chore: '' }

    onSubmitForm = (e) => {
        e.preventDefault();
        const chore = { 
            name: e.target.name.value,
            completed: false
        };
        api.createChore(chore)
            .then(chore => {
                
                this.props.updateChores()
            })
            .catch(error => console.log({ error }))
    }

    render() {
        return (
            <div >
                <form className='add-chore' onSubmit={this.onSubmitForm}> 
                    <input
                        id='name'
                        type='text'
                        name='chore' 
                        placeholder='add chore' 
                        defaultValue='' 
                        onChange={e => this.setState({chore: e.target.value})}
                    />
                    
                    <button onClick='submit'>Add</button>
                    
                </form>
            </div>
        );
    };
};
