import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './main';

const Navigator = () => {
  // Dentro del Navigation container Puedo anidar varios navigators.
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
