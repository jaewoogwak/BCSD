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

let idInput = document.querySelector(".login__input--id");
let pwInput = document.querySelector(".login__input--pw");
const loginBtn = document.querySelector(".login__input__btn--login");
const login = () => {
  if (idInput.value == "" || pwInput.value == "") {
    alert("아이디 또는 패스워드를 입력해주세요");
    idInput.value = "";
    pwInput.value = "";
  } else alert("로그인");
};
loginBtn.addEventListener("click", login);

const onIdChange = (e) => {
  //console.log(e.value);
};
const onPasswordChange = (e) => {};

const isValidUser = () => {
  // console.log(idInput.value, pwInput.value);
  if (idInput.value == ID && pwInput.value == PW) {
    alert("로그인!");
  }
};
