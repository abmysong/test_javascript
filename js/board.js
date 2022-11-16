const searchParams = new URLSearchParams(window.location.search);
const orderBy = searchParams.get('orderBy') || 'board_pk';
const orderByType = searchParams.get('orderByType') || 'desc';

const selectAll = function(selectAll) {
  const checkboxes = document.getElementsByName('select-box');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = selectAll.checked;
  });
};

const boardsRead = function() {
  axios.get('http://localhost:3000/api/boards?orderBy=' + orderBy + '&orderByType=' + orderByType).then(function(response) {
    const tbodyParent = document.getElementById('tbody-parent');
    tbodyParent.innerHTML = '';
    const trChild = document.getElementById('tr-child');
    for (let index in response.data.boards) {
      console.log(index);
      const board = response.data.boards[index];
      const newTrChild = trChild.cloneNode(true);
      tbodyParent.appendChild(newTrChild);
      document.getElementsByName('a-index')[index].innerHTML = board.board_pk + 1;
      document.getElementsByName('a-index')[index].href = './detail.html?board_pk=' + board.board_pk;
      document.getElementsByName('a-title')[index].innerHTML = board.title;
      document.getElementsByName('a-title')[index].href = './detail.html?board_pk=' + board.board_pk;
      document.getElementsByName('td-id')[index].innerHTML = board.id;
      document.getElementsByName('td-create-at')[index].innerHTML = moment(board.create_at).format('YYYY-MM-DD HH:mm');
    }
  }).catch(function(error) {
    alert(error.response.data.message);
  });
};
