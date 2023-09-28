import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../Constants';
import { Orders } from '../../screens';

const Stack = createNativeStackNavigator();

const GoalsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Goleadores"
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
      <Stack.Screen name="Goleadores/as del campeonato" component={Orders} />
    </Stack.Navigator>
  );
};

export default GoalsNavigator;
