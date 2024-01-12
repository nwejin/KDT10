function Practice2(props) {
  const name = 'hi';
  return (
    <div>
      <div>{props.name === 'hi' ? '최진' : 'no'}</div>
      <div>{props.children}</div>
    </div>
  );
}

Practice2.defaultProps = {
  name: 'hi',
};

export default Practice2;
