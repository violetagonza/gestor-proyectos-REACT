import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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
  }, []);

  const handleEdit = (props) => {
    const clickedId = props.match.params.id;
    let info = {};
    const foundCard = data
      .map((item) => item.cards)
      .map((el) =>
        el.find((card) => {
          return card.id === clickedId;
        })
      );
    for (let i = 0; i < foundCard.length; i++) {
      if (foundCard[i] !== undefined) {
        info = foundCard[i];
      }
    }
    return <Edit info={info} />;
  };

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
      <Switch>
        <Route path='/task/:id' render={handleEdit} />
        <Route path='/menu' component={Menu} />
      </Switch>
    </>
  );
}

export default App;
