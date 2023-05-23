import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './tabs';

const Navigator = () => {
  // Dentro del Navigation container Puedo anidar varios navigators.
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
