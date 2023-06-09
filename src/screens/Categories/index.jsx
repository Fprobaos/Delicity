import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { CategotyItem } from '../../Components';
import { selectCategory } from '../../store/actions';

const Categories = ({ navigation }) => {
  // TODOS LAS VISTAS QUE PERTENECEN A UN NAVIGATION CONTAINER RECIBEN COMO PROPIEDAD 'NAVIGATION'
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categorieslist.data);
  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {
      name: item.name,
      color: item.color,
    });
  };
  const renderItem = ({ item }) => <CategotyItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <FlatList data={categories} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Categories;
