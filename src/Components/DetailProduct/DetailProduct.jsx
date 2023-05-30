import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { addToCart } from '../../store/actions/cart.actions';

const DetailProduct = () => {
  const product = useSelector((state) => state.products.selected);
  const dispatch = useDispatch();
  const onAdd = () => {
    dispatch(addToCart(product));
  };
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
