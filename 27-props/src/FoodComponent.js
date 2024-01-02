function FoodComponent(props) {
  const { food } = props;

  const style = {
    color: 'red',
  };

  return (
    <div>
      <h1>
        <span style={style}>{food}</span> 만드는 방법
      </h1>
      <p>1. 소세지 / 야채 / 소스 준비</p>
      <p>2. 야채를 한입 크기로 썰어서 볶는다.</p>
      <p>3. 칼집낸 소세지를 볶는다.</p>
      <p>4. 소스와 함께 볶는다.</p>
    </div>
  );
}

FoodComponent.defaultProps = {
  food: '쏘야',
};

export default FoodComponent;
