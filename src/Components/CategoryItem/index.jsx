import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './style';

const CategotyItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          onSelected(item);
        }}
        style={{ ...styles.containerTouchable, backgroundColor: item.color }}>
        <View>
          <Text style={styles.categoryname}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategotyItem;
