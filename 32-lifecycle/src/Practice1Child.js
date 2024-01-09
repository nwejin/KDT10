import { Component } from 'react';

class Practice1Child extends Component {
  componentDidMount() {
    console.log('컴포넌트 마운트!');
    // 컴포넌트가 마운트된 직후, 트리에 삽입된 직후 호출
    // 랜더링 되자마자 console 발생 (1번)
    // practice1Child가 랜더링 되면 발생
  }

  componentDidUpdate() {
    console.log('컴포넌트 업데이트!');
    // 업데이트 되면 발생
    // 숫자 증가시 발생 (this.props.number) 업데이트 시
  }
  componentWillUnmount() {
    console.log('컴포넌트 언마운트!');
    // 마운트 반대
    // Practice1Child 랜더링이 사라지면서 발생
  }

  render() {
    return <div> 현재 숫자: {this.props.number}</div>;
  }
}

export default Practice1Child;
