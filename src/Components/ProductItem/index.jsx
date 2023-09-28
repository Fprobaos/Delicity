import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const ProductList = ({ item, onSelected, color }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.containerTouchable, backgroundColor: color }}
        onPress={() => onSelected(item)}>
        <View style={styles.teampicturecontainer}>
          <Text style={styles.teampicture}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.price}>Price: {item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductList;
