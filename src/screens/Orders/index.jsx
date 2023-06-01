import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { OrderItem } from '../../Components';
import { deleteOrders, getOrders } from '../../store/actions/orders.actions';

const Orders = () => {
  const orders = useSelector((state) => state.orders.data);
  const dispatch = useDispatch();
  const onRemove = (id) => {
    dispatch(deleteOrders(id));
  };

  const renderItem = ({ item }) => <OrderItem item={item} onRemove={onRemove} />;
  const keyExtractor = (item) => item.id.toString();

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
    </View>
  );
};

export default Orders;
