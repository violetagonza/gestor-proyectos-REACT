import React, { useEffect, useState } from 'react';
import Header from './Header';
import List from './List';
import Menu from './Menu';
import Edit from './Edit';
import List_New from './List_New';
import board from '../services/board.json';
import '../styles/main.scss';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(board.board.list);
    console.log(data);
  });

  const listHtmlCode = data.map((item, index) => <List key={index} defValue={item.title} cards={item.cards} />);
  return (
    <>
      <div className='app'>
        <Header />
        <main className='app-board d-flex flex-nowrap'>
          {listHtmlCode}
          <List_New />
        </main>
      </div>
      <Menu />
      <Edit />
    </>
  );
}

export default App;
