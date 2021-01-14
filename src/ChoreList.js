import React from 'react';
import Chore from './Chore';

class ChoreList extends React.Component {
    static defaultProps = { chores: [] }

    render() {
        return (
            <div className="chore-list">
                <h3 className='h3item'>Chores</h3>
                <div className="chore-list">
                    <table>
                        <tr>
                            <th>Name</th>
                        </tr>
                        {
                            this.props.chores(chore => {
                                <tr>
                                    <td>
                                        <Chore />
                                    </td>
                                </tr>
                            })
                        }
                    </table>
                </div>
            </div>
            
        )
    }
}

export default ChoreList;