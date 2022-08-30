import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

// css 
import './index.css'


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <BookList />
  </StrictMode>,
);


const books = [
  {
    id: 1,
    img : 'https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/English_Therapy-Saiful_Islam-42e32-215765.jpg',
    title : 'English Therapy',
    author : 'Jhon Doe'
  },
  {
    id: 2,
    img : 'https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/f0836d0b7_158227.jpg',
    title : 'প্রোগ্রামিংয়ের চৌদ্দগোষ্ঠী',
    author : 'ঝংকার মাহবুব'
  },
  {
    id: 3,
    img : 'https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/003aa4162_166987.jpg',
    title : 'কম্পিউটার প্রোগ্রামিং-প্রথম খণ্ড ',
    author : 'তামিম শাহরিয়ার সুবিন'
  }
]


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

const Book = (props) => {
  console.log(props);
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


// ReactDom.render(<BookList/>, document.getElementById('root'));