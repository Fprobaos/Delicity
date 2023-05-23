import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const ProductList = ({ item, onSelected, color }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.containerTouchable, backgroundColor: color }}
        onPress={() => onSelected(item)}>
        <View>
          <Text style={styles.name}> {item.name}</Text>
          <Text style={styles.price}>Price: {item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductList;
