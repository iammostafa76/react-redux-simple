import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCream/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <CakeContainer/>
      <HooksCakeContainer/>

      <NewCakeContainer/>
      <NewCakeContainer/>
      <IceCreamContainer/>
    </Provider>
  );
}

export default App;
