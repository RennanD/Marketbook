import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './screens/Home';
import Cart from './screens/Cart';

export default createAppContainer(createSwitchNavigator({Home, Cart}));
