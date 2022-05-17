/* 고양이 */
const img = document.querySelector(".image");

const getUsers = () => {
  axios
    .get("https://api.thecatapi.com/v1/images/search?size=full")
    .then(async (response) => {
      const users = response.data;
      console.log(`GET users`, users[0].url);
      img.src = users[0].url;
    })
    .catch((error) => console.error(error));
};

getUsers();
/* 로그인 버튼 클릭 */

const ID = "jaewoo";
const PW = "123456";

const loginBtn = document.querySelector(".login__input__btn--login");
const login = () => {
  alert("로그인");
};
loginBtn.addEventListener("click", login);

const idInput = document.querySelector(".login__input--id");
const pwInput = document.querySelector(".login__input--pw");

const onIdChange = (e) => {
  //console.log(e.value);
};
const onPasswordChange = (e) => {};

const isVaildUser = () => {
  // console.log(idInput.value, pwInput.value);
  if (idInput.value == ID && pwInput.value == PW) {
    alert("로그인!");
  }
};
