import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { CartItem } from '../../Components';
import { confirmOrder, removeFromCart } from '../../store/actions/cart.actions';

const Cart = () => {
  const total = useSelector((state) => state.cart.total);
  const cart = useSelector((state) => state.cart.data);

  const dispatch = useDispatch();

  const isCartEmpty = cart.length === 0;

  const onRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const onConfirmOrder = () => {
    dispatch(confirmOrder({ cart, total }));
  };

  const renderItem = ({ item }) => <CartItem item={item} onRemove={onRemove} />;

  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />

      <TouchableOpacity
        disabled={isCartEmpty}
        style={isCartEmpty ? styles.buttonDisabled : styles.touchableContainer}
        onPress={onConfirmOrder}>
        <View style={styles.totalPurchaseContainer}>
          <Text style={styles.totaltext}>Total: </Text>
          <Text style={styles.totalPrice}>{total} </Text>
        </View>
        <Text style={styles.buttonConfirm}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
