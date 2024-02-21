import './style/App.css';
import CssModuleComponent from './CssModuleComponent';
import SassComponent from './SassComponent';
import Practice1 from './Practice1';
import Practice2 from './Practice2';
import StyledComponents from './StyledComponents';
import './style/component.css';


function App() {
  return (
    <div className="App">
      <h1>react styling</h1>
      <CssModuleComponent></CssModuleComponent>

      {/* <h1>Sass Styling</h1>
      <SassComponent></SassComponent>

      <h1>Practice1</h1>
      <Practice1></Practice1>

      <h1>Practice2</h1>
      <Practice2></Practice2>

      <h1>styled-components</h1>
      <StyledComponents></StyledComponents> */}
    </div>
  );
}

export default App;
