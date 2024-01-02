import './App.css';
import Button from './Button';
import FuncComponent from './FuncComponent';
import ClassComponent from './ClassComponent';
import FoodComponent from './FoodComponent';
import Practice2 from './Practice2';
import Practice3 from './Practice3';

function App() {
  const Valid = () => {
    console.log('콘솔 띄우기 성공!');
  };
  return (
    <div className="App">
      <FuncComponent name="함수형" />
      <FuncComponent />
      <hr />
      <Button link="https://www.google.com">Google</Button>
      <hr />
      <ClassComponent name="클래스형" />
      <ClassComponent />
      <br />
      <p className="pracTitle"> 실습 1</p>
      <FoodComponent food="소세지 야채 볶음" />
      <FoodComponent />
      <br />
      <p className="pracTitle"> 실습 2</p>
      <Practice2
        img="https://image.yes24.com/momo/TopCate60/MidCate05/5948195.jpg"
        title="해리포터 죽음의 성물"
        price="15,000원"
        type="소설"
      />
      <br />
      <p className="pracTitle"> 실습 3</p>
      <Practice3
        text="App 컴포넌트에서 넘겨준 textProps 입니다."
        valid={Valid}
      />
    </div>
  );
}

export default App;
