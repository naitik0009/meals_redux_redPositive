import { Provider } from 'react-redux';
import { store } from './src/store/store';
import {NavigationContainer} from '@react-navigation/native';
import {NavigatiosScreens} from './src/routes/routes';
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <NavigatiosScreens />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
