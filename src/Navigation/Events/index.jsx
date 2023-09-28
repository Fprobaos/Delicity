import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../Constants';
import { Cart, Orders } from '../../screens';

const Stack = createNativeStackNavigator();

const EventsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Events"
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
      <Stack.Screen name="Noticias y Eventos" component={Cart} />
    </Stack.Navigator>
  );
};

export default EventsNavigator;
