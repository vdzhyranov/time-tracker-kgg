import React from 'react';
import './App.css';
import {Header, ListOfNotes, Trackers, Footer, Details} from './components'
import { Routes ,Route } from 'react-router-dom';
import { useGetUsersContext, UsersContext} from "./hooks/useGetUsersContext";

const links = [
    {
        slug: '/tracker',
        name: 'Tracker',
    },
    {
        slug: '/',
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
                <Route path={'tracker'} element={<Trackers/>}/>
                <Route path={'/'} element={<ListOfNotes/>}/>
                <Route path={'details/:slug'} element={<Details/>}/>
                <Route path='*' element={<div>404</div>}/>
            </Routes>
            <Footer/>
        </div>
    </UsersContext.Provider>
  );
}

export default App;
