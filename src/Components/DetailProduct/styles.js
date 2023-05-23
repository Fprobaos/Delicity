import { StyleSheet } from 'react-native';

import { theme } from '../../Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  price: {
    fontFamily: 'OpenSans-Bold',
    paddingVertical: 20,
    fontSize: 16,
    color: theme.colors.text,
  },
  name: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 18,
    color: theme.colors.text,
  },
  detail: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 16,
    paddingVertical: 20,
    color: theme.colors.text,
  },
});
