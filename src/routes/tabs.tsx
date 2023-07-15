import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { SCREENS } from '../config/constants';
import { Portfolio, Markets } from '../screens';
import AppStackNavigator from './stacks';

const Tab = createBottomTabNavigator();

const Screens = [
    {...SCREENS.MAIN.PORTFOLIO, component: Portfolio, options: {tabBarIcon: () => (<FontAwesome name="line-chart" size={30} />)}},
    {...SCREENS.MAIN.MARKETS, component: AppStackNavigator, options: {tabBarIcon: () => (<Feather name="pie-chart" size={30} />)}},
];

const AppRoutes = () => {
    return (
        <Tab.Navigator initialRouteName={'Markets'} screenOptions={{headerShown: false}}>
            <Tab.Screen {...SCREENS.MAIN.PORTFOLIO} component={Portfolio} options={{tabBarIcon: () => (<FontAwesome name="line-chart" size={30} />)}} />
            <Tab.Screen name='Markets' component={AppStackNavigator} options={{tabBarIcon: () => (<FontAwesome name="line-chart" size={30} />)}} />
        </Tab.Navigator>
    )
};

export {AppRoutes as default};