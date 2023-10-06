import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import { theme } from '../../Constants';
import EventsNavigator from '../Events';
import FixtureNavigator from '../Fixture';
import GoalsNavigator from '../GoalsNavigator';
import LeaguesNavigator from '../LeaguesNavigator';

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="League"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          fontFamily: 'OpenSans-Medium',
          fonstSize: 10,
          backgroundColor: theme.colors.background,
        },
      }}>
      <BottomTab.Screen
        name="League"
        component={LeaguesNavigator}
        options={{
          tabBarLabel: 'Campeonato',
          tabBarActiveTintColor: theme.colors.text,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'trophy' : 'trophy-outline'} size={24} color="white" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Goleadores"
        component={GoalsNavigator}
        options={{
          tabBarLabel: 'Goleadores',
          tabBarActiveTintColor: theme.colors.text,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'football' : 'football-outline'} size={24} color="white" />
          ),
        }}
      />
      <BottomTab.Screen
        name="FixtureTab"
        component={FixtureNavigator}
        options={{
          tabBarLabel: 'Fixture',
          tabBarActiveTintColor: theme.colors.text,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'podium' : 'podium-outline'} size={24} color="white" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Noticias y Eventos"
        component={EventsNavigator}
        options={{
          tabBarLabel: 'Noticias y Eventos',
          tabBarActiveTintColor: theme.colors.text,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'newspaper' : 'newspaper-outline'} size={24} color="white" />
          ),
          tabBarBadgeStyle: { backgroundColor: theme.colors.primary },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
