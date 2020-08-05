import React from "react";
import Card from '../Card/Card';
import style from './BookItems.module.css';

const BookList = props => {
  if (props.books === null) {
    console.log('No books here yet')
  }
  return (
    <div>
      {props.books !== null ? 'TestTrue': 'TestFalse'}
    </div>
  );
};

export default BookList;
