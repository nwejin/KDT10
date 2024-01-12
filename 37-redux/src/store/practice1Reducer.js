// // // 타입 정의
// export const visible = () => ({ type: 'change' });

// 초기 값 정의
const initialState = { visible: true };

// 함수 정의
const practice1Reducer = (state = initialState, action) => {
  if (action.type === 'practice/change') {
    return { visible: !state.visible };
  }
  return state;
};

// 내보내기
export default practice1Reducer;
