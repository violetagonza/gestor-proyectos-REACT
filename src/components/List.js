import React from 'react';
import List_header from './List_header';
import Card from './Card';
import List_footer from './List_footer';
const List = () => {
  return (
    <div className='app-list'>
      <div className='p-1 rounded-sm bg-primary shadow'>
        <List_header />
        <Card />
        <List_footer />

        {/* <partial src="_list_header.html" title="Backlog"></partial>
      <partial src="_card.html" title="Publicar en GitHub Pages"></partial>
      <partial src="_list_footer.html"></partial> */}
      </div>
    </div>
  );
};

export default List;
