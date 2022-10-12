const join = function(form) {
  console.log(form);
  if (!form['id'].value) {
    alert('아이디를 입력 하세요.');
    form['id'].focus();
    return;
  }
  if (!form['password'].value) {
    alert('비밀번호를 입력 하세요.')
    form['password'].focus();
    return;
  }
  if (form['password'].value !== form['passwordRe'].value) {
    alert('비밀번호가 동일하지 않습니다.');
    return;
  }
  axios.post('http://localhost:3000/api/members/join', {
    id: form['id'].value,
    password: form['password'].value
  });
};