import routes from './NavigatorRoutes';
import AppHOC from './App';
import {
  createNormalRoot,
  createNavigation,
  createBottomTabsRoot,
  createScreens,
  defaultTheme,
} from 'react-native-ridge-navigation';

export const NavigationRoots = {
  RootHome: 'home',
  RootAuth: 'auth',
};

export const BottomRoots = {
  Home: {
    path: '/home',
    title: () => 'Home',
    icon: require('./img/bell-outline/icon-20.png'),
    selectedIcon: require('./img/bell/icon-20.png'),
    child: routes.HomeScreen,
  },
  Posts: {
    path: '/post',
    title: () => 'Posts',
    icon: require('./img/palette-swatch-outline/icon-20.png'),
    selectedIcon: require('./img/palette-swatch/icon-20.png'),
    child: routes.PostsScreen,
  },
  Account: {
    path: '/account',
    title: () => 'Account',
    icon: require('./img/account-circle-outline/icon-20.png'),
    selectedIcon: require('./img/account-circle/icon-20.png'),
    child: routes.AccountScreen,
  },
};

// svg to png
// https://webkul.github.io/myscale/
//
//     tab icon
// http://nsimage.brosteins.com/Home

const Navigator = createNavigation(
  defaultTheme,
  createScreens(routes),
  {
    [NavigationRoots.RootHome]: createBottomTabsRoot(
      [BottomRoots.Home, BottomRoots.Posts, BottomRoots.Account],
      {
        breakingPointWidth: 500,
        components: {
          // start:
        },
      }
    ),
    [NavigationRoots.RootAuth]: createNormalRoot(routes.AuthScreen),
  },
  AppHOC
);

export default Navigator;
