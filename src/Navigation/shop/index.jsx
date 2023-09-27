import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../Constants';
import { Leagues, ProductDetail, Products } from '../../screens';
import Teams from '../../screens/Teams';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    //   Si no pongo el initial Route Name, me pone la primera screen que tengo en la lista
    <Stack.Navigator
      initialRouteName="Leagues"
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
      <Stack.Screen name="Ligas" component={Leagues} />
      <Stack.Screen
        name="Teams"
        component={Teams}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: { backgroundColor: route.params.color },
        })}
      />
      <Stack.Screen
        name="Product Detail"
        component={ProductDetail}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: { backgroundColor: route.params.color },
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
