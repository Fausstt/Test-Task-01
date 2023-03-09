import React from 'react';
import Louding from './UI/louding/Louding';
import UserCard from './UserCard';

function CardList({ userCard, Louder }) {
  return (
    <div className="GETrequset__body">
      {userCard.map(e =>
        <UserCard
          key={e.id}
          userCard={e}
        />
      )}
      {Louder ? <Louding /> : <></>}
    </div>
  );
}

export default CardList;