import { Component } from 'react';
import PropTypes from 'prop-types';

class Practice3 extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div style={{ height: '200px' }}>
        <h1> {text}</h1>
        <button onClick={valid}> 콘솔 메세지 </button>
      </div>
    );
  }
}

Practice3.defaultProps = {
  text: '이건 기본 text props 입니다.',
};

Practice3.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Practice3;
