import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import LoginScreen from '../containers/Login/LoginScreen';
import HomeScreen from '../containers/home/HomeScreen';

const AppContainer = createAppContainer(createStackNavigator(
  {
    Home: HomeScreen,
    SignIn: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: 'SignIn',
  },
));


export default AppContainer;
