// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

// 자바스크립트에 타입이 있을 때의 장점 
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */

function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (response) {
  response.address.city
})

function startApp() {
  fetchUser()
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].addres.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
