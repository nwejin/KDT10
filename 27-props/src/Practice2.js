//import 'css경로'
// import book from '경로'

function Practice2(props) {
  const { img, title, author, price, type } = props;
  const style = {
    backgroundColor: 'tomato',
    width: '300px',
    height: 'auto',
    margin: 'auto',
  };
  return (
    <div style={style}>
      <h3 style={{ color: 'white' }}> 이번주 베스트 셀러</h3>
      <img src={img} alt="" />
      <p className="text one"> {title}</p>
      <p className="text"> {author}</p>
      <p className="text"> {price}</p>
      <p className="text"> {type}</p>
    </div>
  );
}

Practice2.defaultProps = {
  img: '',
  title: '정보가 없습니다.',
  author: '정보가 없습니다.',
  price: '정보가 없습니다.',
  type: '정보가 없습니다.',
};

export default Practice2;
