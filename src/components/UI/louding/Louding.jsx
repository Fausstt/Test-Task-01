import React from 'react';
import louder from '/home/ivan/projects/demo/test/nuw_test/src/img/Preloader.png'
import './louding.scss'

function Louding(props) {
  return (
      <img className='Louding' src={louder} alt="" />
  );
}

export default Louding;