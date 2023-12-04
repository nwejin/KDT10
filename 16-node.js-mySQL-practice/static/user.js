// 회원가입 클릭 함수
function register() {
  const form = document.forms["signup-form"];

  if (
    form.userId.value.length === 0 ||
    form.userPw.value.length === 0 ||
    form.userName.value.length === 0
  ) {
    alert("아이디, 비밀번호, 이름을 필수로 입력해주세요!");
    return;
  }

  if (form.userName.value.length > 10) {
    alert("이름은 10글자 미만으로 입력해주세요!");
    return;
  }

  axios({
    method: "POST",
    url: "/user/signup",
    data: {
      id: form.userId.value,
      pw: form.userPw.value,
      name: form.userName.value,
    },
  }).then((res) => {
    console.log(res.data);
    window.location.href = "/user/signin";
  });
}
