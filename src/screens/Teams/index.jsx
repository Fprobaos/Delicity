import { useEffect } from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import ProductList from '../../Components/ProductItem';
import { filterProducts, selectProduct } from '../../store/actions/products.action';

const Teams = ({ navigation, route }) => {
  const { color } = route.params;
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categorieslist.selected);
  const filteredProducts = useSelector((state) => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filterProducts(category.id));
  }, []);

  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate('Product Detail', {
      name: item.name,
      color,
    });
  };
  const renderItem = ({ item }) => (
    <ProductList item={item} onSelected={onSelected} color={category.color} />
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList renderItem={renderItem} keyExtractor={keyExtractor} data={filteredProducts} />
    </SafeAreaView>
  );
};

export default Teams;
