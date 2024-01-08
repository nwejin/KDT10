import { useForm } from 'react-hook-form';

function Form() {
  const {
    register, // register는 input 태그에 할당해서, value 변경 감지
    handleSubmit, // handleSubmit은 form submit 이벤트 시 호출
    formState: { errors }, // form 상태 객체 안 에러 객체
    watch, // 특정 form 필드 값을 실시간으로 사용
  } = useForm();

  console.log('errors', errors);

  // register로 등록한 이름을 watch() 안에 작성
  console.log('watch username', watch('username'));

  // 자동으로 value값들이 data에 들어간다.
  const onValid = (data) => {
    console.log('onValid', data);
  };

  // 규칙을 만족하지 않는경우 자동으로 에러 발생
  const onInValid = (err) => {
    console.log('onInValid', err);
  };

  return (
    <>
      <h1>react-hook-form 라이브러리 데모 실습</h1>

      {/* handelSubmit(func A [, func B]) : 두개의 함수를 받을 수 있다.
        - func A: 필수, 유요할 때 실행
        - func B: 선택, 유효하지 않을 경우 실행
        */}
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          name=""
          id=""
          placeholder="username"
          // form 태그 안에서 submit 이벤트를 사용할때 name="username"으로 사용하던걸 register가 사용
          {...register('username', {
            required: '이름을 입력해주세요',
            minLength: {
              message: '이름은 최소 2글자 이상 작성해주세요!',
              value: 2,
            },
          })}
        />
        {/* 에러 메세지 */}
        <div>{errors.username?.message}</div>
        <br />
        <input
          type="email"
          name=""
          id=""
          placeholder="email (gmail)"
          {...register('email', {
            required: '이메일을 입력해주세요',
            validate: {
              useGmail: (value) => {
                return (
                  value.includes('gmail.com') || 'gmail로만 가입이 가능합니다'
                );
              },
            },
          })}
        />
        <div>{errors.email?.message}</div>
        <br />

        <input
          type="text"
          name=""
          id=""
          placeholder="password"
          {...register('password', {
            required: '비밀번호를 입력해주세요',
          })}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
