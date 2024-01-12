import { Component } from 'react';

class Practice3 extends Component {
  state = {
    name: '최진',
    age: 28,
  };

  up = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };

  down = () => {
    this.setState((prevState) => ({
      age: prevState.age - 1,
    }));
  };

  render() {
    const { name, age } = this.state;
    // const year = this.props;
    console.log(this.props.year);
    const born = this.props.year - age;
    console.log(born);
    return (
      <div>
        <p>이름: {name}</p>
        <p>나이: {age}</p>
        <p>출생년도: {born}</p>
        <button onClick={this.up}>나이 증가</button>
        <button onClick={this.down}>나이 감소</button>
      </div>
    );
  }
}

export default Practice3;
