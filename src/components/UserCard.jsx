import React from 'react';
import vector from '../img/Vector.png'

function UserCard({ userCard }) {

  return (
    <div className='UsersCards'>
      {userCard.photo
        ? <img className='UsersCards__pfoto' src={userCard.photo} alt="" />
        : <img className='UsersCards__pfoto' src={vector} alt="" />
      }

      <div className="UsersCards__name">
        {userCard.name}
      </div>

      <div className="UsersCards__info">
        <div className="UsersCards__info__position">
          {userCard.position}
        </div>

        <div className="UsersCards__info__email">
          {userCard.email}
        </div>

        <div className="UsersCards__info_phone">
          {userCard.phone}
        </div>
      </div>
    </div>
  );
}

export default UserCard;