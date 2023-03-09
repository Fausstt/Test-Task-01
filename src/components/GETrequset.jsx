import React, { useEffect } from 'react';
import CardList from './CardList';
import MyButton from './UI/Button/MyButton';


function GETrequset({ userCard, AddUser, Louder, TotalUsers, title }) {



  return (
    <section id='Users' className='GETrequset'>
      <h1>{title}</h1>

      <CardList
        Louder={Louder}
        userCard={userCard}
      />
      {userCard.length === TotalUsers
        ? <></>
        : <MyButton onClick={AddUser}>
          Show more
        </MyButton>
      }

    </section>
  );
}

export default GETrequset;