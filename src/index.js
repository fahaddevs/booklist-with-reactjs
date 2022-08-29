import React from 'react'
import ReactDom from 'react-dom' 

// css 
import './index.css'


// setup variable 
const firstBook = {
  img : 'https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/English_Therapy-Saiful_Islam-42e32-215765.jpg',
  title : 'English Therapy',
  author : 'Jhon Doe'
}


const secondBook = {
  img : 'https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/f0836d0b7_158227.jpg',
  title : 'প্রোগ্রামিংয়ের চৌদ্দগোষ্ঠী',
  author : 'ঝংকার মাহবুব'
}


function BookList(){
  return (
    <section className='booklist'>
      <Book 
        img={firstBook.img} 
        title={firstBook.title} 
        author={firstBook.author} 
      />

      <Book 
        img={secondBook.img} 
        title={secondBook.title} 
        author={secondBook.author} 
      />
    </section>
  )
}

const Book = (props) => {
  const {img, title, author} = props;
  return (
    <article className='book'>
      <div className='book-inner'>
        <img src={img} alt="book" />
        <h4>{title}</h4>
        <span>{author}</span>
      </div>
    </article>
  )
}


ReactDom.render(<BookList/>, document.getElementById('root'));