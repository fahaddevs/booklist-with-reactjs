import React from 'react'

import {books} from './books'
import Book from './Book'


function BookList(){
  return (
    <section className='booklist'>
      {
        books.map((book)=>{
          return (
            <Book key={book.id} {...book} />
          )
        })
      }
    </section>
  )
}

export default BookList
