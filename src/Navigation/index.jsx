import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import AuthNavigator from './auth';
import TabNavigator from './tabs';

const Navigator = () => {
  const userID = useSelector((state) => state.authenticate.userID);

  return <NavigationContainer>{userID ? <TabNavigator /> : <AuthNavigator />}</NavigationContainer>;
};

export default Navigator;
