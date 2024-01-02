import { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {
  // 클래스형 컴포넌트는 render() 함수가 필수
  render() {
    const { name } = this.props;
    return (
      <div>
        <p>
          새로운 컴포넌트의 이름은 <b>{this.props.name}</b>
        </p>
        <p>
          새로운 컴포넌트의 이름은 <b>{name}</b>
        </p>
      </div>
    );
  }
}

ClassComponent.defaultProps = {
  name: '클래스형 default',
};

// console 에 오류는 나타나지만, 화면에는 정상적으로 나타난다.
ClassComponent.propTypes = {
  name: PropTypes.string,
};

export default ClassComponent;
