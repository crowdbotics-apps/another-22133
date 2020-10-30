import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList165159Navigator from '../features/NotificationList165159/navigator';
import Settings165158Navigator from '../features/Settings165158/navigator';
import Settings165150Navigator from '../features/Settings165150/navigator';
import UserProfile165148Navigator from '../features/UserProfile165148/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList165159: { screen: NotificationList165159Navigator },
Settings165158: { screen: Settings165158Navigator },
Settings165150: { screen: Settings165150Navigator },
UserProfile165148: { screen: UserProfile165148Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
