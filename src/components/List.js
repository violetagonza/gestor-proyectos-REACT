import React from 'react';
import List_header from './List_header';
import Card from './Card';
import List_footer from './List_footer';
const List = (props) => {
  console.log(props);

  return (
    <div className='app-list'>
      <div className='p-1 rounded-sm bg-primary shadow'>
        <List_header defValue={props.defValue} />
        <Card />
        <List_footer />
      </div>
    </div>
  );
};

export default List;
