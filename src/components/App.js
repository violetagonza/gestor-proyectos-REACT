import React from 'react';
import Header from './Header';
import List from './List';
import Menu from './Menu';
import Edit from './Edit';
import '../styles/main.scss';
import List_New from './List_New';
function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <main className='app-board d-flex flex-nowrap'>
          <List />
          <List />
          <List />
          <List />
          <List_New />
        </main>
      </div>
      <Menu />
      <Edit />
    </>
  );
}

export default App;
