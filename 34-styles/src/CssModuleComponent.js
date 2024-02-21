import styles from './style/cssModule.module.css';
import './style/component.css';

// CSS Module
// - 클래스명 중복 방지
// - css 파일 확장 : .module.css
// - react component 파일에서 해당 css 파일 호출 시 css 파일에 선언한 클래스 이름이 고유한 값을 가지게 된다.
// - 고유한 css 클래스 이름이 만들어지는 과정에서 파일 경로, 파일 이름, 클래스 이름, 해쉬값 등이 사용 될 수 있다.

function CssModuleComponent() {
  const boxStyle = [styles.box, styles.red];

  const handleStyle = () => {
    boxStyle.push('new-style');
  };

  console.log(styles);
  return (
    <div className={styles.container}>
      <div className={[styles.box, styles.red].join(' ')}> </div>
      <div className={[styles.box, styles.orange].join(' ')}> </div>
      <div className={[styles.box, styles.yellow].join(' ')}> </div>
    </div>
  );
}

export default CssModuleComponent;
