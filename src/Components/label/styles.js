import { StyleSheet } from 'react-native';

import { theme } from '../../Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    color: theme.colors.text,
    fontFamily: 'OpenSans-Medium',
    width: 200,
  },
  subLabel: {},
});
