// get cat image
const img = document.querySelector(".image");
const getImageData = () => {
  axios
    .get("https://api.thecatapi.com/v1/images/search?size=full")
    .then(async (response) => {
      const dataURL = response.data[0].url;
      console.log(`GET users`, dataURL);
      img.src = dataURL;
    })
    .catch((error) => console.error(error));
};

getImageData();

/* 로그인 버튼 클릭 */
const ID = "jaewoo";
const PW = "123456";
/* cookie expire time */
const expireTime_72h = 60 * 60 * 24 * 3;
const expireTime_1h = 60 * 60;

let idInput = document.querySelector(".login__input--id");
let pwInput = document.querySelector(".login__input--pw");
const loginBtn = document.querySelector(".login__input__btn--login");
const logoutBtn = document.querySelector(".login__input__btn--cancel");
const getCookie = (name) => {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
const login = () => {
  if (getCookie("blocked")) {
    // 로그인 실패 5회 이상이면 로그인 차단.
    alert(
      "로그인을 5회 이상 실패해서 차단되었습니다. 잠시 뒤에 다시 시도헤주세요"
    );
    return;
  }
  // cookie
  let failCount = Number(localStorage.getItem("count"));

  if (localStorage.getItem("count") == null) {
    // 로컬스토리지에 카운팅 플래그 존재하지 않으면, (처음 로그인 시도 -> 실패일 때)
    localStorage.setItem("count", 0);
  } else if (localStorage.getItem("count") == 4) {
    // 로그인 실패 누적 4회 초과 시 -> 로그인 1시간 동안 차단 쿠키 생성.
    document.cookie = `blocked=true;max-age=${expireTime_1h}`;
    failCount += 1;
    localStorage.setItem("count", failCount);
    alert(
      "로그인을 5회 이상 실패해서 차단되었습니다. 잠시 뒤에 다시 시도헤주세요"
    );
    return;
  }
  const userID = idInput.value;
  const userPW = pwInput.value;
  document.cookie = `user_id=${userID};max-age=${expireTime_72h}`;
  localStorage.setItem("userID", userID);
  sessionStorage.setItem("userID", userID);
  //document.cookie = `user_pw=${userPW};max-age=${expireTime_72h}`;
  if (idInput.value == "" || pwInput.value == "") {
    alert("아이디 또는 패스워드를 입력해주세요");
    idInput.value = "";
    pwInput.value = "";
  } else if (idInput.value != ID || pwInput.value != PW) {
    alert("아이디 또는 비밀번호가 틀렸습니다.");
    failCount += 1;
    localStorage.setItem("count", failCount);
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
  }
};
const onClickLogOut = () => {
  localStorage.clear();
  sessionStorage.clear();
  let date = new Date();
  date.setDate(date.getDate() - 1);
  document.cookie = `user_id=jaewoo; Expires=${date.toUTCString()}`;
  document.cookie = `blocked=true; Expires=${date.toUTCString()}`;

  alert("로그아웃");
};

idInput.addEventListener("change", isValidUser);
pwInput.addEventListener("change", isValidUser);
logoutBtn.addEventListener("click", onClickLogOut);
