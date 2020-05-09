import React from 'react';

const Card = (props) => {
  let tagsHtmlCode = props.tags.map((item, index) => (
    <span key={index} className='badge badge-secondary bg-success'>
      {item}
    </span>
  ));
  return (
    <article className='js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm' title='Abrir la tarjeta'>
      <div>{tagsHtmlCode}</div>
      <div>
        <h3 className='h6'>{props.title}</h3>
      </div>
      <div className='text-black-50'>
        <small className='pr-2 fas fa-align-left'></small>
        <small className='far fa-check-square'></small>
        <small title='Subtareas completadas: 3 de 5'>3/5</small>
      </div>

      <div className='app-card-btns btn-group-vertical btn-group-sm'>
        <button type='button' className='btn btn-light text-muted border shadow-sm app-card-move-up' title='Mover esta tarjeta hacia abajo'>
          <span className='fas fa-arrow-up'></span>
        </button>
        <button type='button' className='btn btn-light text-muted border shadow-sm app-card-move-down' title='Mover esta tarjeta hacia arriba'>
          <span className='fas fa-arrow-down'></span>
        </button>
      </div>
    </article>
  );
};
export default Card;
