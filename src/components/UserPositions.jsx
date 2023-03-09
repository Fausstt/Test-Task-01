import React from 'react';
import MyInp from './UI/input/MyInp';
import Louding from './UI/louding/Louding';

function UserPositions({ positions, isUserNewAccount, UserNewAccount, positionsTitle, compLouder }) {

  return <>
    {
      compLouder
        ? <Louding />
        : <div className="UserPositions">
          <p>{positionsTitle}</p>

          {positions.map(e =>
            <label key={e.id} className='UserPositions__inp'>
              <MyInp
                required
                onChange={() => isUserNewAccount({ ...UserNewAccount, position: e.name, position_id: e.id })}
                type="radio"
                name='position'
              />
              <span>{e.name}</span>
            </label>
          )}
        </div>
    }
  </>
}

export default UserPositions;