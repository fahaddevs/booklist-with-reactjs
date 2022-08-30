import React from 'react'


const Book = ({img, title, author}) => {
  return ( 
    <article className='book'>
      <div className='book-inner'>
        <img src={img} alt="book" />
        <h4>{title}</h4>
        <p>{author}</p>
      </div>
    </article>
  )
}


export default Book
