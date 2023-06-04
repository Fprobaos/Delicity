import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import AuthNavigator from './auth';
import TabNavigator from './tabs';

const Navigator = () => {
  const userID = useSelector((state) => state.authentication.userID);
  // Dentro del Navigation container Puedo anidar varios navigators.

  return <NavigationContainer>{userID ? <TabNavigator /> : <AuthNavigator />}</NavigationContainer>;
};

export default Navigator;
