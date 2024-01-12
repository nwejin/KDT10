import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeContext, themes } from './theme-context';
// import ThemedButton from './themed-button';
import ThemeTogglerButton from './theme-toggler-button';

// ThemedButton를 사용하는 중간에 있는 컴포넌트
// function Toolbar(props) {
//   return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };

    // state에 업데이트 메서드도 포함되어있으므로
    // 이 또한 context Provider를 통해 전달될것입니다.
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // Provider에 state 전체를 넘겨줍니다.
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
