import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  RouteProp,
  TabNavigationState,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import Home from '@/pages/Home';
import { RootStackParamList, RootStackNavigation } from './index';
import Setting from '@/pages/Setting';

import IconFont from '../iconfont/index';

type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
  state?: TabNavigationState;
};

export type BottomTabParamList = {
  Home: undefined;
  Detail: undefined;
  Setting: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

interface IProps {
  navigation: RootStackNavigation;
  route: Route;
}

function getHeaderTitle(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '首页';
  switch (routeName) {
    case 'Home':
      return '组件';
    case 'Setting':
      return '设置';
    default:
      return '组件';
  }
}
export default class BottomTabs extends React.PureComponent<IProps> {
  componentDidMount() {
    this.setOptions();
  }

  componentDidUpdate() {
    this.setOptions();
  }

  setOptions = () => {
    const { navigation, route } = this.props;
    navigation.setOptions({
      headerTransparent: false,
      headerTitle: getHeaderTitle(route),
    });
  };

  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#f86442',
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={({ route }) => ({
            tabBarLabel: '组件',
            headerTitle: getHeaderTitle(route),
            tabBarIcon: ({ color, size }) => <IconFont name="zujian" color={color} size={size} />,
          })}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={({ route }) => ({
            tabBarLabel: '设置',
            headerTitle: getHeaderTitle(route),
            tabBarIcon: ({ color, size }) => <IconFont name="shezhi" color={color} size={size} />,
          })}
        />
      </Tab.Navigator>
    );
  }
}
