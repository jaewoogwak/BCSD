/* ID가 이메일 구조인지 체크 */
let isEmailform = false;
const EmailFormatChecker = (e) => {
  const idCheck = document.querySelector(".sign-up__input__check--id-isEqual");
  let value = e.value;
  var regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  if (regEmail.test(value) === true) {
    isEmailform = true;
  } else {
    isEmailform = false;
  }

  // 정규식 공부하면 넣기
  if (isEmailform) {
    idCheck.innerHTML = "<strong style='color:blue'>좋아요!</strong>";
    isEmailform = true;
  } else if (value == "") {
    idCheck.innerHTML = "";
    isEmailform = false;
  } else {
    idCheck.innerHTML = "<strong>이메일 형식에 맞게 입력해주세요</strong>";
    isEmailform = false;
  }
};

/* pw-check가 pw와 같은 값인지 체크 */
let isPasswordEqual = false;

// 비밀번호 확인 핸들러
const passwordChecker = (e) => {
  const passwordInput = document.querySelector(".sign-up__input--pw");
  const passwordRepeat = document.querySelector(".sign-up__input--pw-repeat");
  const passwordCheck = document.querySelector(
    ".sign-up__input__check--pw-isEqual"
  );

  let password = passwordInput.value;
  let passwordCheckValue = passwordRepeat.value;

  if (password == "" && passwordCheckValue == "") {
    passwordCheck.innerHTML = "";
  } else if (password == passwordCheckValue) {
    passwordCheck.innerHTML = "<strong style='color:blue'>좋아요!</strong>";
  } else {
    passwordCheck.innerHTML = "<strong>비밀번호가 일치하지 않습니다</strong>";
  }
  console.log(password, passwordCheckValue);
};

/* 학번 자릿수 제한 */
/* 학번에 따라 전공 자동 입력 */
const major = document.querySelector(".sign-up__input--major");
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
const autoHypen = (e) => {
  const phoneNumber = document.querySelector(".sign-up__input--phone-number");
  const phoneNumberCheck = document.querySelector(
    ".sign-up__input__check--phone-number-is-valid-format"
  );
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
  if (phoneNumber.value.length == 13) {
    phoneNumberCheck.innerHTML =
      "<strong style='color : blue'>좋아요!</strong>";
  } else {
    phoneNumberCheck.innerHTML = "";
  }
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
