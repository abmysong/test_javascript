const boardsCreate = function(button) {
  const form = button.form;
  if (!form['title'].value) {
    alert('타이틀을 입력 하세요.');
    return;
  }
  if (!form['content'].value) {
    alert('내용을 입력 하세요.');
    return;
  }
  axios.post('http://localhost:3000/api/boards', {
    title: form['title'].value,
    content: form['content'].value
  }).then(function(response) {
    alert('글이 정상적으로 작성되었습니다.');
    window.location.href = "/board.html";
  }).catch(function(error) {
    alert(error.response.data.message);
  });
};
