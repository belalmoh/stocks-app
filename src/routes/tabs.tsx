import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { SCREENS } from '../config/constants';
import { Portfolio, Markets } from '../screens';

const Tab = createBottomTabNavigator();

const Screens = [
    {...SCREENS.MARKETS, component: Markets, options: {tabBarIcon: () => (<Feather name="pie-chart" size={30} />)}},
    {...SCREENS.PORTFOLIO, component: Portfolio, options: {tabBarIcon: () => (<FontAwesome name="line-chart" size={30} />)}},
];

const AppRoutes = () => {
    return (
        <Tab.Navigator initialRouteName={SCREENS.MARKETS.key} screenOptions={{headerShown: false}}>
            {Screens.map((screen) => (<Tab.Screen {...screen} />))}
            {/* <Tab.Screen name={SCREENS.NEWS.name} key={SCREENS.NEWS.key}  /> */}
        </Tab.Navigator>
    )
};

export {AppRoutes as default};