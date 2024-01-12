function Input() {
  const test = () => {
    alert('123');
  };
  return (
    <>
      <button onClick={test}> 기본 alert창 </button>
    </>
  );
}

export default Input;
