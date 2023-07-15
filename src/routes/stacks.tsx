import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Button, Icon } from 'native-base';

import { SCREENS } from '../config/constants';
import { Markets, StockDetails } from '../screens';
import StockTitle from '../components/stock-title';

const Stack = createNativeStackNavigator();


const StackAppRoutes = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName={SCREENS.MAIN.MARKETS.name} screenOptions={{headerShown: false}}>
            <Stack.Screen name={SCREENS.MAIN.MARKETS.name} key={SCREENS.MAIN.MARKETS.name} component={Markets}/>
            <Stack.Screen 
                name={SCREENS.DETAILS.STOCK.name} 
                key={SCREENS.DETAILS.STOCK.name} 
                component={StockDetails}
                options={({ route }) => ({ 
                    headerShown: true,
                    headerTitle: (props) => <StockTitle {...props} title={route.params.name} />,
                    headerLeft: () => {
                        return (
                            <Button variant={'link'} leftIcon={<Icon as={Ionicon} name='chevron-back'/>} onPress={() => navigation.navigate(SCREENS.MAIN.MARKETS.name)}/>
                        )
                    }
                })}
            />
        </Stack.Navigator>
    )
};

export {StackAppRoutes as default};