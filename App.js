import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens';
import Login from './screens/Login';
import Register from './screens/Register';
import Formulario from './screens/Teste';
import Ranking from './screens/Ranking';
import Play from './screens/Play';
import Game from './components/Game';
import { Provider } from 'react-redux';
import FirebaseContainer from './firebase/container';
import store from './reducers/store'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <FirebaseContainer>        
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#121214'}, headerTitleStyle: {color: '#04d361'}}}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Ranking' component={Ranking} />
            <Stack.Screen name='Play' component={Play} />
            <Stack.Screen name='Game' component={Game} />
          </Stack.Navigator>
        </NavigationContainer>
      </FirebaseContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
