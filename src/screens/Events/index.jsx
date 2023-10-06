import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

const Events = () => {
  return (
    <View style={styles.container}>
      {/* <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      /> */}
      <Text>Eventos</Text>
    </View>
  );
};

export default Events;
