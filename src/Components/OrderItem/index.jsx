import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { theme } from '../../Constants';

const OrederItem = ({ item, onRemove }) => {
  const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };
  return (
    <View style={styles.container}>
      <View styles={styles.headerContainer}>
        <Text styles={styles.date}>{formatDate(item.date)}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.body}>
          <Text style={styles.totalprice}>USD {item.total}</Text>
        </View>
        <TouchableOpacity onPress={() => onRemove(item.id)}>
          <Ionicons name="trash" size={20} color={theme.colors.red} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrederItem;
