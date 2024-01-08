import Faq from './Faq';
import UseCallbackEx from './UseCallbackEx';
import UseCallbackEx2 from './UseCallbackEx2';
import UseMemoEx from './UseMemoEx';
import UseReducerEx from './UseReducerEx';

function App() {
  return (
    <div className="App">
      <UseMemoEx />
      <hr />
      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 postId={9} />
      <hr />
      <UseReducerEx />
      <hr />
      <Faq />
    </div>
  );
}

export default App;
