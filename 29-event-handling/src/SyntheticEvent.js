function SyntheticEvent() {
  function syntheticEvent(e) {
    console.log('Synthetic Event!');
    console.log(e);

    // 콘솔에 기록되는 e 객체는 SyntheticEvent (합성 이벤트)
    // : 리액트가 DOM이 아닌 VirtualDOM을 사용하는 것 처럼
    // 웹 브라우저의 naticeEvent가 아니라 nativeEvent를 감싼 SyntheticEvent 사용

    // onClick 이나 onChange와 같은 이벤트 들은 브라우저 기본 이벤트가 아니라 리액트의 고유한 이벤트 객체(SyntheticEvent)
    // 이벤트가 끝나면 초기화 되어 정보를 참조할 수 없음
  }

  function printInputValue(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <button onClick={syntheticEvent}>SyntheticEvent Console</button>
      {/* input 값의 변화를 보고 싶을때 */}
      <input type="text" name="" id="" onChange={printInputValue} />
    </div>
  );
}

export default SyntheticEvent;
