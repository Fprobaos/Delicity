import { View, Text, Button } from 'react-native';

import { styles } from './styles';

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>List of products</Text>
      <Button
        title="Product Detail"
        onPress={() => {
          navigation.navigate('Product Detail');
        }}
      />
    </View>
  );
};

export default Products;
