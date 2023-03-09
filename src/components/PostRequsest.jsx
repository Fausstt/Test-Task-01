import React from 'react';
import MyInp from './UI/input/MyInp';
import MyButton from '../components/UI/Button/MyButton';
import UserPositions from './UserPositions';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { createTheme } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';


function PostRequsest({ positions, compLouder, title, UserNewAccount, isUserNewAccount }) {



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = () => {
    console.log(UserNewAccount);
  }



  return (
    <section id='Pagistration' className='PostRequsest' >
      <h1>{title}</h1>

      <form className='formPagen' onSubmit={handleSubmit(onSubmit)}>

        <div className='formPagen__inp'>
          <TextField
            variant='outlined'
            onChange={(e) => isUserNewAccount({ ...UserNewAccount, name: e.target.value })}
            color={'secondary'}
            type={'text'}
            label={'Your name'}
            required
          />
          <TextField
            variant='outlined'
            onChange={(e) => isUserNewAccount({ ...UserNewAccount, email: e.target.value })}
            color={'secondary'}
            type={'email'}
            label={'Email'}
            required
          />
          <TextField
            variant='outlined'
            onChange={(e) => isUserNewAccount({ ...UserNewAccount, phone: e.target.value })}
            color={'secondary'}
            type={'phone'}
            label={'Phone'}
            required
          />
        </div>

        <UserPositions
          positionsTitle={'Select your position'}
          compLouder={compLouder}
          positions={positions}
          UserNewAccount={UserNewAccount}
          isUserNewAccount={isUserNewAccount}
        />

        <MyInp
          required
          onInput={e => isUserNewAccount({ ...UserNewAccount, photo: e.target.files[0] })}
          name='photo'
          type='file'
          accept='.jpg,.jpeg,'
        />

        <div className='formPagen__button'>
          <MyButton>
            Sign up
          </MyButton>
        </div>
      </form>
    </section>
  );
}

export default PostRequsest;