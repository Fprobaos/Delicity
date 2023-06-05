import { StyleSheet } from 'react-native';

import { theme } from '../../Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    alignItems: 'center',
  },
  input: {
    borderColor: theme.colors.text,
    borderWidth: 5,
    borderRadius: 10,
    marginVertical: 5,
    textAlign: 'center',
    color: theme.colors.text,
  },
  errorContainer: {},
  errorMessage: {
    color: theme.colors.red,
  },
});
