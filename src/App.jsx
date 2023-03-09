import React, { useEffect, useState } from 'react';
import PostServer from './components/API/UserGuery';
import GETrequset from './components/GETrequset';
import Header from './components/Header';
import { useFetching } from './components/hooks/useFetching';
import PostRequsest from './components/PostRequsest';
import TextBox from './components/TextBox';
import './styles/App.scss'

const App = () => {

  // пользователи
  const [userCard, isUserCard] = useState([])
  // позиции 
  const [positions, isPositions] = useState([])
  // страница
  const [userPage, isUserPage] = useState(1)
  // количество
  const [userMuch, isUserMuch] = useState(6)
  // количество изеров
  const [TotalUsers, isTotalUsers] = useState('')
// новый акаунт
  const [UserNewAccount, isUserNewAccount] = useState({

  })

  // запрос на сервер
  const [fethPosts, Louder, postErrore] = useFetching(async () => {
    const respons = await PostServer.getUserCard(userPage, userMuch)
    isUserCard([...userCard, ...respons.data.users])
    isTotalUsers(respons.data.total_users);
  })

  const [components, compLouder] = useFetching(async () => {
    const respons = await PostServer.getUserCardPositions();
    isPositions(respons.data.positions)
  })
  // оптимизация
  useEffect(() => {
    fethPosts()
  }, [userPage])

  useEffect(() => {
    components()
  }, [])

  const AddUser = () => {
    isUserPage(userPage + 1)
  }
  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <TextBox />

        <GETrequset
          userCard={userCard}
          AddUser={AddUser}
          TotalUsers={TotalUsers}
          Louder={Louder}
          title={'Working with GET request'}
        />

        <PostRequsest
          UserNewAccount={UserNewAccount}
          isUserNewAccount={isUserNewAccount}
          title={'Working with POST request'}
          compLouder={compLouder}
          positions={positions}
        />
      </main>
    </div>
  );
}

export default App;