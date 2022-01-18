import React from 'react';
import './App.css';
import {Header, ListOfNotes, Trackers, Footer} from './components'
import { Routes ,Route } from 'react-router-dom';
import { useGetUsersContext, UsersContext} from "./hooks/useGetUsersContext";

const links = [
    {
        slug: '/',
        name: 'Tracker',
    },
    {
        slug: '/list',
        name: 'List items',
    }
]

const App= () => {
    const usersValue = useGetUsersContext();
  return (
    <UsersContext.Provider value={usersValue} >
        <div className='main flex w-full justify-between flex-col' style={{height: '100vh'}}>
          <Header links={links}/>
            <Routes>
                <Route path={'/'} element={<Trackers/>}/>
                <Route path={'/list'} element={<ListOfNotes/>}/>
            </Routes>
            <Footer/>
        </div>
    </UsersContext.Provider>
  );
}

export default App;
