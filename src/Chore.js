import React from 'react';

export default class Chore extends React.Component {
  state = { completed: false };

  static defaultProps = { chore: {} };

  render() {
    return (
      <div className='chore'>
        <input
          onChange={(e) => this.setState({ completed: e.target.checked })}
          type='checkbox'
          name='completed'
          id='completed'
        />
        <label
          className={(this.state.completed) ? 'completed' : null}
        >
          {this.props.chore.name}
        </label>
        <button className='item-button'>Edit</button>
        <button className='item-button'>Delete</button>
      </div>
    );
  };
};