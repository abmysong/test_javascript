const boardsDelete = function() {
  if (!confirm('삭제하시겠습니까?')) return;
  axios.delete('http://localhost:3000/api/boards/' + board_pk).then(function(response) {
    window.location.href = './board.html';
  });
};
const boardsUpdate = function(button) {
  if (!confirm('수정하시겠습니까?')) return;
  const form = button.form;
  if (!form['title'].value) {
    alert('타이틀을 입력 하세요.');
    return;
  }
  if (!form['content'].value) {
    alert('내용을 입력 하세요.');
    return;
  }
  axios.put('http://localhost:3000/api/boards/' + board_pk, {
    title: form['title'].value,
    content: form['content'].value
  }).then(function(response) {
    alert('글이 정상적으로 수정되었습니다.');
    window.location.href = "./board.html";
  }).catch(function(error) {
    alert(error.response.data.message);
  });
};
