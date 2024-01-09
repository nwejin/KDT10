import { useSearchParams } from 'react-router-dom';

function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('mode')); // null or Dark
  // / => null
  // /?mode=Dark => Dark

  //   searchParams.get('mode');
  //   setSearchParams({ mode: 'Dark' });

  return (
    <div className={['Main', searchParams.get('mode')].join(' ')}>
      <h1> Main Page</h1>
      <button
        onClick={() => {
          // {mode:' 'Dark'} 설정
          setSearchParams({ mode: 'Dark' });
        }}
      >
        {' '}
        Dark Mode{' '}
      </button>
    </div>
  );
}

export default MainPage;
