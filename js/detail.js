const searchParams = new URLSearchParams(window.location.search);
const board_pk = searchParams.get('board_pk');

const boardsDetail = function() {
  axios.get('http://localhost:3000/api/boards/' + board_pk).then(function(response) {
    const board = response.data.board
    document.getElementsByName('title')[0].value = board.title;
    document.getElementsByName('content')[0].value = board.content;
  });
};

const cancel = function() {
  window.location.href = './board.html';
};

const update = function() {
  window.location.href = './update.html?board_pk=' + board_pk;
};
