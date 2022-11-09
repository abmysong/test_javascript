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

const loginCheck = function() {
  axios.get('http://localhost:3000/api/members/login').then(function(response) {
    console.log(response.data);
    document.getElementById('login-name').innerHTML = response.data.decoded.id;
    document.getElementsByClassName('introduce')[1].style.display = 'none';
  }).catch(function(error) {
    document.getElementsByClassName('introduce')[0].style.display = 'none';
  });
};

const logout = function() {
  axios.defaults.headers.common['x-jwt-token'] = null;
  localStorage.removeItem('x-jwt-token');
  window.location.href = '/';
};

loginCheck();
