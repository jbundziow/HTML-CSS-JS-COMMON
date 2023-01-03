import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const [isInputValid, setIsInputValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsInputValid(true);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length !== 0) {
    props.onAddGoal(enteredValue);
    }
    else {
      setIsInputValid(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !isInputValid ? 'red' : 'black'}}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} style={{borderColor: !isInputValid ? 'red' : '#ccc', background: !isInputValid ? 'salmon' : 'transparent'}} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
