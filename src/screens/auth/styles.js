import { StyleSheet } from 'react-native';

import { theme } from '../../Constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },

  loginContainer: {
    borderColor: theme.colors.text,
    borderWidth: 10,
    borderRadius: 10,
    height: 400,
    width: '80%',
    maxWidth: 400,
    alignItems: 'center',
  },

  title: {
    paddingVertical: 10,
    color: theme.colors.text,
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
  },

  buttonContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  link: {
    marginVertical: 10,
  },
  linkTitle: {
    fontSize: 18,
    textDecorationLine: 'underline',
    color: theme.colors.tertiary,
    textAlign: 'center',
  },
});
