// props로 이름, 학년, 과목 받아오기
interface StudentInfo {
  name: string;
  grade: number;
  subject?: string; // ? : 선택사항
  handleClick?: (name: string, grade: number) => void; // 전달받은 함수에 대한 타입 지정
}

function Student({ name, grade, subject, handleClick }: StudentInfo) {
  return (
    <div>
      {/* 옵셔널 체이닝 (?.) 사용으로 오류 해결 */}
      <ul onClick={() => handleClick?.(name, grade)}>
        <li>이름: {name}</li>
        <li>학년: {grade}</li>
        <li>과목: {subject}</li>
      </ul>
    </div>
  );
}

export default Student;
