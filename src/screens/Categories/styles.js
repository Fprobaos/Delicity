import { StyleSheet, StatusBar } from 'react-native';

import { theme } from '../../Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
  },
});
