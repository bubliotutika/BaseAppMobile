import { 
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

// Local Import
import Style from './style';
import ContactScreen from '../../../screen/app/Contact';

const Button =  createStackNavigator(
  {
    Contact: {
      screen: ContactScreen,
      navigationOptions: () => ({
        title: 'Contact',
        ...Style(),
      }),
    },
  }
);

// Export
export default createAppContainer(Button);