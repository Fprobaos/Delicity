import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { CartItem, OrderItem } from '../../Components';
import { CartList } from '../../Constants';

const Cart = ({ navigation }) => {
  const onRemove = (id) => {
    console.warn('remover producto');
  };
  const TOTAL = 2000;
  const renderItem = ({ item }) => <OrderItem item={item} onRemove={onRemove} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <FlatList
        data={CartList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />

      <TouchableOpacity style={styles.touchableContainer} onPress={() => null}>
        <View style={styles.totalPurchaseContainer}>
          <Text style={styles.totaltext}>Total: </Text>
          <Text style={styles.totalPrice}>{TOTAL} </Text>
        </View>
        <Text style={styles.buttonConfirm}> Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
