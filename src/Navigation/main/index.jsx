import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Categories, ProductDetail, Products } from '../../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    //   Si no pongo el initial Route Name, me pone la primera screen que tengo en la lista
    <Stack.Navigator initialRouteName="Categories" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product Detail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
