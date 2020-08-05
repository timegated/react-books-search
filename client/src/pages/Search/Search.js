import React, { useState } from "react";
import API  from "../../utils/API";
import BookList from '../../components/BookItems/BookItems';
import Card from '../../components/Card/Card';
import Form from '../../components/Form/Form';
import style from './Search.module.css';

console.log(API)
const Search = () => {
  const [searchTerm, setSearchTerm] = useState({
    query: ''
  })
  const [books, setBooks] = useState({
    data: null
  })

  const { query } = searchTerm;
  const { data } = books;

  const searchForBooks = async (query) => {
    try {
      const res = await API.searchBooks(query)
      const resData = res.data.map(i => {
        return {
          googleId: i.id,
          title: i.volumeInfo.title,
          subtitle: i.volumeInfo.subTitle || '',
          authors: i.volumeInfo.authors,
          description: i.volumeInfo.description,
          image: i.volumeInfo.imageLinks.smallThumbnail,
          link: i.volumeInfo.infoLink
        }
      })
      setBooks({data: resData})
      console.log(data)
    } catch (error) {
      console.error('Something went wrong with searchForBooks')
    }
 
  }
  //Search button that sends info to google api
  const handleSubmit = (event) => {
    console.log(query)
    event.preventDefault()
    searchForBooks(query)
  }

  const handleChange = (e) => {
    setSearchTerm({ ...query, [e.target.name]: e.target.value })
  }


  //Retrieving saved books

  const bookAction = (book) => {
    API.saveBook(book).then(() => this.searchBooks(this.state.query)).catch(err => console.log(err))
  }

  return (
    <div className={style.searchContent}>
      <Card name="Google Books Search" />
      <Form label="Enter Name of Book" name="query" onSubmit={handleSubmit} onChange={handleChange} />
      <div className={style.bookContent}>
        <BookList books={books}/>
      </div>
      
    </div>
  );
}

export default Search;
