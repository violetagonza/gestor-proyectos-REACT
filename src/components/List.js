import React from 'react';
import List_header from './List_header';
import Card from './Card';
import List_footer from './List_footer';
const List = (props) => {
  let cardHtmlCode = props.cards.map((card, index) => <Card key={index} title={card.title} tags={card.tags} id={card.id} />);

  return (
    <div className='app-list'>
      <div className='p-1 rounded-sm bg-primary shadow'>
        <List_header defValue={props.defValue} />
        {cardHtmlCode}
        <List_footer />
      </div>
    </div>
  );
};

export default List;
