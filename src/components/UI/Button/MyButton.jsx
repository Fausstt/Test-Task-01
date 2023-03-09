import React from 'react';
import './MyButton.scss'

function MyButton(props) {
  return <>
    {
      props.href
        ? <a
          {...props}
          className={props.disabled ? 'MyButton__disabled' : 'MyButton'}
        >
          {props.children}
        </a>
        : <button
          {...props}
          className={props.disabled ? 'MyButton__disabled' : 'MyButton'}
        >
          {props.children}
        </button>
    }
  </>

}

export default MyButton;