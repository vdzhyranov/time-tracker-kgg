import React from 'react';
import './App.css';
import Header from './components/Header/Header'

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
    <div className='main'>
      <Header links={links}/>
    </div>
  );
}

export default App;
