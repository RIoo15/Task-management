import React from 'react';
import '../App.css';
import CustomButton from './CustomButton';

function Card(props) {
    const handlePriorityChange = (event) => {
      props.updatePriority(props.id, parseInt(event.target.value));
    };
  
    return (
      <div className={`Card ${getPriorityClass(props.priority)}`} style={{ backgroundColor: props.complete === true && 'gray', color: props.complete === true && 'white' }}>
        <h3>{props.title}</h3>
        <p>{props.des}</p>
        <p>Status: {props.complete ? 'Completed' : 'In Progress'}</p>
        <div className='btnwrapper'>
          <CustomButton color='White' bg='#1877F2' name='Complete' click={props.update} />
          <CustomButton color='White' bg='red' name='Delete' click={props.delete} />
  
          <select value={props.priority} onChange={handlePriorityChange}>
            <option value={0}>Low</option>
            <option value={1}>Medium</option>
            <option value={2}>High</option>
          </select>
        </div>
      </div>
    );
  }
  
  // Function to determine the priority class
  const getPriorityClass = (priority) => {
    if (priority === 0) {
      return 'low';
    } else if (priority === 1) {
      return 'medium';
    } else {
      return 'high';
    }
  }
  
  export default Card;