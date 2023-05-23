import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../Constants';
import { Orders } from '../../screens';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTitleStyle: {
          fontFamily: 'OpenSans-Bold',
          color: theme.colors.text,
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
