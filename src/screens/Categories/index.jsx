import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

const Categories = ({ navigation }) => {
  // TODOS LAS VISTAS QUE PERTENECEN A UN NAVIGATION CONTAINER RECIBEN COMO PROPIEDAD 'NAVIGATION'
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <Button title="Go to Products" onPress={() => navigation.navigate('Products')} />
    </View>
  );
};

export default Categories;
