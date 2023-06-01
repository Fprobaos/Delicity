import React from 'react';
import { Button, Text, View } from 'react-native';

import { styles } from './styles';

const DetailProduct = ({ onAdd, product }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>Price: {product.price}</Text>
      <Text style={styles.detail}>{product.detail}</Text>
      <Button title="Add to cart" onPress={onAdd} />
    </View>
  );
};

export default DetailProduct;
