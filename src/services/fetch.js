const getData = () => {
  return fetch('./board.json')
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      result.board.list;
      for (let i = 0; i < result.board.list.length; i++) {
        result.board.list[i].id = i;
      }
    });
};
export default getData;
