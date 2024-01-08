import { useForm } from 'react-hook-form';

function Practice1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const Valid = (data) => {
    console.log(data);
  };

  const InValid = (err) => {
    console.log(err);
  };
  return (
    <>
      <h1> 실습 1</h1>
      <form onSubmit={handleSubmit(Valid, InValid)}>
        <input
          type="text"
          name=""
          id=""
          placeholder="이름"
          {...register('name', {
            required: '이름은 필수 항목입니다.',
          })}
        />

        <div>{errors.name?.message}</div>
        <br />
        <input
          type="text"
          name=""
          id=""
          placeholder="나이"
          {...register('age', {
            validate: {
              minAge: (value) => {
                return value > 0 || '0 이상의 숫자만 입력 가능합니다.';
              },
            },
          })}
        />
        <br />
        <div>{errors.age?.message}</div>
        <button type="submit">제출</button>
      </form>
    </>
  );
}

export default Practice1;
