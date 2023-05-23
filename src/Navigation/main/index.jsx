import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../Constants';
import { Categories, ProductDetail, Products } from '../../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    //   Si no pongo el initial Route Name, me pone la primera screen que tengo en la lista
    <Stack.Navigator
      initialRouteName="Categories"
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
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen
        name="Products"
        component={Products}
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

export default MainNavigator;
