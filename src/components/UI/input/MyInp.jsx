import React, { useState, forwardRef } from 'react';
import './MyInp.scss'
import TextField from '@material-ui/core/TextField';


function MyInp(props) {
  const [inpFile, isInpFile] = useState()
  switch (props.type) {
    case 'phone':
      return <div className='MyInpTel__box'>
        < input
          {...props}
          pattern={'^[\+]{0,1}380([0-9]{9})$'}
          className='MyInpTel'
        />
        <span className='MyInpTel__span'>+38 (XXX) XXX - XX - XX</span>
      </div>
    case 'text':
      return < input
        {...props}
        minLength={2}
        maxLength={60}
        className='MyInpText'
      />
    case 'email':
      return < input
        {...props}
        minLength={2}
        maxLength={60}
        className='MyInpText'
      />
    case 'radio':
      return <>
        <input {...props} className='MyInpRadio' />
        <span className='MyInpRadio__span'></span>
      </>
    case 'file':
      return <label className='MyInpFile'>
        <div className='MyInpFile__button'>Upload</div>
        {inpFile
          ? <div>{inpFile}</div>
          : <div className="MyInpFile__body">Upload your photo</div>
        }
        <input
          {...props}
          className='MyInpFile__inp'
          onChange={e => {
            isInpFile(e.target.files[0].name)
          }} />
      </label>
  }
}
export default MyInp;


