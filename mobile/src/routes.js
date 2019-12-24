import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default createAppContainer(
  createSwitchNavigator({
    Home,
    Cart,
  }),
);
