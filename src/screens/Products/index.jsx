import { SafeAreaView, FlatList } from 'react-native';

import { styles } from './styles';
import ProductList from '../../Components/ProductItem';
import { PRODUCTS } from '../../Constants/data/Products';

const Products = ({ navigation, route }) => {
  const { categoryID, color } = route.params;

  const FilterProdcuts = PRODUCTS.filter((product) => product.category === categoryID);
  const onSelected = (item) => {
    navigation.navigate('Product Detail', {
      productID: item.id,
      name: item.name,
      color,
    });
  };
  const renderItem = ({ item }) => (
    <ProductList item={item} onSelected={onSelected} color={color} />
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList renderItem={renderItem} keyExtractor={keyExtractor} data={FilterProdcuts} />
    </SafeAreaView>
  );
};

export default Products;
