import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import Fixture from '../../Components/Fixture';
import { theme } from '../../Constants';

const Stack = createNativeStackNavigator();

const FixtureNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Fixture"
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
      <Stack.Screen name="Fixture" component={Fixture} />
    </Stack.Navigator>
  );
};
export default FixtureNavigator;
