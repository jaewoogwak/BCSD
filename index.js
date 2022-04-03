/* ID가 이메일 구조인지 체크 */
const idInput = document.querySelector(".sign-up__input--id");
const idCheck = document.querySelector(".sign-up__input__check--id-isEqual");
const isEmailForm = (e) => {
  console.log("isEmailform", e.value);
  let value = e.value;
  if (value.includes("@") && value.includes(".")) {
    idCheck.innerHTML = "";
  } else {
    console.log("notincluded", value);
    idCheck.innerHTML = "<strong>이메일 형식에 맞게 입력해주세요</strong>";
  }
};
/* pw-check가 pw와 같은 값인지 체크 */
const passwordInput = document.querySelector(".sign-up__input--pw");
const passwordCheckInput = document.querySelector(".sign-up__input--pw-check");
const isPasswordEqual = document.querySelector(
  ".sign-up__input__check--pw-isEqual"
);
const body = document.querySelector("body");
const onPasswordChange = (e) => {
  console.log(e.value);
  console.log(e ? e.target.value : "");
};
const onPasswordCheckChange = (e) => {
  console.log(e.target ? e.target.value : "");
};
const passwordChecker = (e) => {
  let password = passwordInput.value;
  let passwordCheckValue = passwordCheckInput.value;
  if (password == passwordCheckValue) {
    isPasswordEqual.innerHTML = "";
  } else {
    isPasswordEqual.innerHTML = "<strong>비밀번호가 일치하지 않습니다</strong>";
  }
  console.log(password, passwordCheckValue);
};

/* 학번 자릿수 제한 */
/* 학번에 따라 전공 자동 입력 */
const major = document.querySelector(".sign-up__input--major");
const studentNumber = document.querySelector(".sign-up__input--student-number");

const handleOnInput = (el, maxlength = 10) => {
  if (el.value.length > maxlength) {
    el.value = el.value.substr(0, maxlength);
  }
  if (el.value.length >= 6) {
    switch (el.value.substr(5, 2)) {
      case "20":
        major.value = "기계공학부";
        break;
      case "36":
        major.value = "컴퓨터공학부";
        break;
      case "61":
        major.value = "전자정보통신공학부";
        break;
      case "51":
        major.value = "디자인공학부";
        break;
      case "72":
        major.value = "건축공학부";
        break;
      case "74":
        major.value = "에너지신소재화학공학부";
        break;
      case "80":
        major.value = "산경";
        break;
      default:
        major.value = "";
        break;
    }
  } else {
    major.value = "";
  }
};
major.addEventListener("change", handleOnInput);

/* 전화번호 하이픈 자동삽입 */
const phoneNumber = document.querySelector(".sign-up__input--phone-number");
const autoHypen = (e) => {
  // 숫자만 입력하게 해줌 (정규식)
  let value = e.value.replace(/\D+/g, "");
  const maxLength = 11;
  let result = "";
  // 입력한 숫자 11자리(전화번호)로 루핑
  // result라는 새로운 문자열을 만들어서 전화번호 하나씩 넣어줌
  // 전화번호 4,8자리 앞에 하이픈 삽입
  for (let i = 0; i < value.length && i < maxLength; i++) {
    switch (i) {
      case 3:
        result += "-";
        break;
      case 7:
        result += "-";
        break;
      default:
        break;
    }
    result += value[i];
  }
  phoneNumber.value = result;
};

/* 회원가입 버튼 클릭 */
const registerBtn = document.querySelector(".sign-up__input__btn--register");
const register = () => {
  alert("회원가입");
};
registerBtn.addEventListener("click", register);

/* 회원가입 취소 */
const cancelBtn = document.querySelector(".sign-up__input__btn--cancel");
const cancel = () => {
  history.back();
};
cancelBtn.addEventListener("click", cancel);
