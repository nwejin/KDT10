import UseToggle from './hooks/UseToggle';

function Faq() {
  const [isFaqOpen, setIsFaqOpen] = UseToggle();
  console.log(UseToggle());

  return (
    <>
      <h1>custom hook (useToggle) ex</h1>
      <div onClick={setIsFaqOpen} style={{ cursor: 'pointer' }}>
        Q. 리액트에서 커스텀 훅 만들 수 있나??
      </div>

      {/* true일때 아래 div 출력 */}
      {isFaqOpen && <div>A.가능합니다</div>}
    </>
  );
}

export default Faq;
