const axiosDefaultsHeaders = function(token) {
  if (token) {
    localStorage.setItem('x-jwt-token', token);
    axios.defaults.headers.common['x-jwt-token'] = token;
  } else if (localStorage.getItem('x-jwt-token')) {
    axios.defaults.headers.common['x-jwt-token'] = localStorage.getItem('x-jwt-token');
  }
};
axiosDefaultsHeaders();

const login = function(form) {
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
  axios.post('http://localhost:3000/api/members/login', {
    id: form['id'].value,
    password: form['password'].value
  }).then(function(response) {
    axiosDefaultsHeaders(response.data.token);
    window.location.href = "/";
  }).catch(function(error) {
    alert(error.response.data.message);
  });
};