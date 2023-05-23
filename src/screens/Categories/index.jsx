import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

import { styles } from './styles';
import { CategotyItem } from '../../Components';
import { CATEGORIES } from '../../Constants/data/Categories';

const Categories = ({ navigation }) => {
  // TODOS LAS VISTAS QUE PERTENECEN A UN NAVIGATION CONTAINER RECIBEN COMO PROPIEDAD 'NAVIGATION'
  const onSelected = (item) => {
    navigation.navigate('Products', {
      categoryID: item.id,
      name: item.name,
      color: item.color,
    });
  };
  const renderItem = ({ item }) => <CategotyItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <FlatList data={CATEGORIES} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Categories;
