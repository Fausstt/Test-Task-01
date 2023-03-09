import React from 'react';
import MyButton from './UI/Button/MyButton';

function TextBox(props) {
  return (
    <section className='text__box'>
      <div className='text__box__text'>

        <h1>
          Test assignment<wbr/> for front-end developer
        </h1>
        <p>
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
        </p>
      </div>

      <MyButton href='#Pagistration'>
        Sign up
      </MyButton>
    </section>
  );
}

export default TextBox;