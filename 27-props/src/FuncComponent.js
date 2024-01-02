import PropTypes from 'prop-types';

export default function FuncComponent(props) {
  // 구조분해도 가능
  const { name } = props;
  return (
    <div>
      <h1> 안녕하세요 </h1>
      <p>여기는 Function Component</p>
      <p>
        새로운 컴포넌트의 이름은 <b>{props.name}</b>
      </p>
      <p>
        새로운 컴포넌트의 이름은 <b>{name}</b>
      </p>
    </div>
  );
}

FuncComponent.defaultProps = {
  name: '함수형 default',
};

// console 에 오류는 나타나지만, 화면에는 정상적으로 나타난다.
FuncComponent.propTypes = {
  name: PropTypes.string,
};
