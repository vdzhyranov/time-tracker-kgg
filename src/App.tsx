import React from 'react';
import './App.css';
import {Header, ListOfNotes, Trackers, Footer} from './components'
import { Routes ,Route } from 'react-router-dom';

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

  return (
    <div className='main flex w-full justify-between flex-col' style={{height: '100vh'}}>
      <Header links={links}/>
        <Routes>
            <Route path={'/'} element={<Trackers/>}/>
            <Route path={'/list'} element={<ListOfNotes/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
