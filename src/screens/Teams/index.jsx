import { SafeAreaView, Text } from 'react-native';

import { styles } from './styles';

const Teams = ({ navigation, route }) => {
  const { color } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>fdasdasd</Text>
    </SafeAreaView>
  );
};

export default Teams;
