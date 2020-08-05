import React from 'react';
import style from './Form.module.css';

const Form = (props) => {
  return (
    <form className={style.formGroup} onSubmit={props.onSubmit}>
      <div className={style.inputGroup}>
        <label htmlFor="Title">{props.label}</label>
        <input onChange={props.onChange} type="text" name={props.name} value={props.query} />
      </div>
      <button className={style.submitButton}>Submit</button>
    </form>
  );
};

export default Form;
