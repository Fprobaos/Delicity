import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import { theme } from '../../Constants';
import OrdersNavigator from '../Orders';
import CartNavigator from '../cart';
import ShopNavigator from '../shop';

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  const cart = useSelector((state) => state.cart.data);
  const isCartEmpty = cart.length === 0;
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          fontFamily: 'OpenSans-Medium',
          fonstSize: 10,
          backgroundColor: theme.colors.background,
        },
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color="white" />
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'newspaper' : 'newspaper-outline'} size={24} color="white" />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={24} color="white" />
          ),
          tabBarBadge: cart.length,
          tabBarBadgeStyle: isCartEmpty
            ? { backgroundColor: theme.colors.primary }
            : { backgroundColor: theme.colors.red },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
