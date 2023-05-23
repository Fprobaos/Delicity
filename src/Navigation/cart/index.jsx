import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../Constants';
import { Cart, Orders } from '../../screens';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
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
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
