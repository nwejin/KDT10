// 참고. 컴포넌트 코드
import './style/practice.scss';

function Practice1() {
  return (
    <div className="larva">
      <div className="body body1">
        <div className="eye eye-white">
          <div className="eye eye-black"></div>
        </div>
      </div>
      <div className="body body2"></div>
      <div className="body body3"></div>
      <div className="body body4"></div>
      <div className="body body5"></div>

      {/*  process.env.PUBLIC_URL: /public 폴더 경로 */}
      <img
        className="grass"
        src={
          'https://img.freepik.com/free-vector/green-grass-border-realistic-design_52683-15183.jpg?t=st=1704759358~exp=1704759958~hmac=ae1827800f5b4dccaf88889edd4ebdb0ef6826b3d3d073fe60bac43583d32d65'
        }
        alt="잔디"
      />
    </div>
  );
}

export default Practice1;
