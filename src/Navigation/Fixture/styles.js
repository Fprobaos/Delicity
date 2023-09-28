import { StyleSheet } from 'react-native';

import { theme } from '../../Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.text,
    fontSize: 30,
  },
});
